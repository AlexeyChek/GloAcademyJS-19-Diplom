/* eslint-disable no-console */
// импорт стандартных библиотек Node.js
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { createServer } = require('http');

// файл для базы данных
const DB_FILE = process.env.DB_FILE || './db.json';
// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 3000;
// префикс URI для всех методов приложения
const URI_PREFIX = '/api/items';

/**
 * Класс ошибки, используется для отправки ответа с определённым кодом и описанием ошибки
 */
class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

/**
 * Асинхронно считывает тело запроса и разбирает его как JSON
 * @param {Object} req - Объект HTTP запроса
 * @throws {ApiError} Некорректные данные в аргументе
 * @returns {Object} Объект, созданный из тела запроса
 */
function drainJson(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(JSON.parse(data));
    });
  });
}

/**
 * Проверяет входные данные и создаёт из них корректный объект
 * @param {Object} data - Объект с входными данными
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ type: string, name: string, units: string, cost: string }} Объект клиента
 */
function makeItemFromData(data) {
  const errors = [];

  function asString(v) {
    return v && String(v).trim() || '';
  }

  function asCurrency(n) {
    if (!isNaN(parseInt(n)) && isFinite(n)) {
      return parseFloat(n);
    }
    return '';
  }

  // составляем объект, где есть только необходимые поля
  const item = {
    type: asString(data.type),
    name: asString(data.name),
    units: asString(data.units),
    cost: asCurrency(data.cost),
  };

  // проверяем, все ли данные корректные и заполняем объект ошибок, которые нужно отдать клиенту
  if (!item.type) errors.push({ field: 'type', message: 'Не указан тип услуги' });
  if (!item.name) errors.push({ field: 'name', message: 'Не указан вид услуги' });
  if (!item.units) errors.push({ field: 'units', message: 'Не указаны еденицы измерения' });
  if (!item.cost) errors.push({ field: 'cost', message: 'Не указана цена или указана не верно' });

  // если есть ошибки, то бросаем объект ошибки с их списком и 422 статусом
  if (errors.length) throw new ApiError(422, { errors });

  return item;
}

/**
 * Возвращает список услуг из базы данных
 * @param {{ search: string }} [params] - Поисковая строка
 * @returns {{ id: string, type: string, name: string, units: string, cost: string }[]} Массив услуг
 */
function getItemList(params = {}) {
  const items = JSON.parse(readFileSync(DB_FILE) || '[]');
  if (params.search) {
    const search = params.search.trim().toLowerCase();
    return items.filter(item => [
        item.type,
        item.name,
        item.units,
        item.cost
      ].some(str => str.toLowerCase().includes(search))
    );
  }
  return items;
}

/**
 * Создаёт и сохраняет услугу в базу данных
 * @throws {ApiError} Некорректные данные в аргументе, услуга не создана (statusCode 422)
 * @param {Object} data - Данные из тела запроса
 * @returns {{ id: string, type: string, name: string, units: string, cost: string, createdAt: string, updatedAt: string }} Объект услуги
 */
function createItem(data) {
  const newItem = makeItemFromData(data);
  newItem.id = Math.random().toString(10).substring(2, 9) + Date.now().toString().substring(7, 12);
  newItem.createdAt = newItem.updatedAt = new Date().toISOString();
  writeFileSync(DB_FILE, JSON.stringify([...getItemList(), newItem]), { encoding: 'utf8' });
  return newItem;
}

/**
 * Возвращает объект Услуги по его ID
 * @param {string} itemId - ID Услуги
 * @throws {ApiError} Услуга с таким ID не найдена (statusCode 404)
 * @returns {{ id: string, type: string, name: string, units: string, cost: string, createdAt: string, updatedAt: string }} Объект услуги
 */
function getItem(itemId) {
  const item = getItemList().find(({ id }) => id === itemId);
  if (!item) throw new ApiError(404, { message: 'Item Not Found' });
  return item;
}

/**
 * Изменяет услугу с указанным ID и сохраняет изменения в базу данных
 * @param {string} itemId - ID изменяемой улуги
 * @param {{ type?: string, name?: string, units?: string, cost?: string }} data - Объект с изменяемыми данными
 * @throws {ApiError} Услуга с таким ID не найдена (statusCode 404)
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ id: string, type: string, name: string, units: string, cost: string, createdAt: string, updatedAt: string }} Объект услуги
 */
function updateItem(itemId, data) {
  const items = getItemList();
  const itemIndex = items.findIndex(({ id }) => id === itemId);
  if (itemIndex === -1) throw new ApiError(404, { message: 'Item Not Found' });
  Object.assign(items[itemIndex], makeItemFromData({ ...items[itemIndex], ...data }));
  items[itemIndex].updatedAt = new Date().toISOString();
  writeFileSync(DB_FILE, JSON.stringify(items), { encoding: 'utf8' });
  return items[itemIndex];
}

/**
 * Удаляет Услугу из базы данных
 * @param {string} itemId - ID Услуги
 * @returns {{}}
 */
function deleteItem(itemId) {
  const items = getItemList();
  const itemIndex = items.findIndex(({ id }) => id === itemId);
  if (itemIndex === -1) throw new ApiError(404, { message: 'Item Not Found' });

  items.splice(itemIndex, 1);
  writeFileSync(DB_FILE, JSON.stringify(items), { encoding: 'utf8' });
  return {};
}

// создаём новый файл с базой данных, если он не существует
if (!existsSync(DB_FILE)) writeFileSync(DB_FILE, '[]', { encoding: 'utf8' });

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
module.exports = createServer(async (req, res) => {
  // req - объект с информацией о запросе, res - объект для управления отправляемым ответом

  // этот заголовок ответа указывает, что тело ответа будет в JSON формате
  res.setHeader('Content-Type', 'application/json');

  // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
  // в этом случае достаточно ответить с пустым телом и этими заголовками
  if (req.method === 'OPTIONS') {
    // end = закончить формировать ответ и отправить его клиенту
    res.end();
    return;
  }

  // если URI не начинается с нужного префикса - можем сразу отдать 404
  if (!req.url || !req.url.startsWith(URI_PREFIX)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  // убираем из запроса префикс URI, разбиваем его на путь и параметры
  const [uri, query] = req.url.substr(URI_PREFIX.length).split('?');
  const queryParams = {};

  // параметры могут отсутствовать вообще или иметь вид a=b&b=c
  // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
  if (query) {
    for (const piece of query.split('&')) {
      const [key, value] = piece.split('=');
      queryParams[key] = value ? decodeURIComponent(value) : '';
    }
  }

  try {
    // обрабатываем запрос и формируем тело ответа
    const body = await (async () => {
      if (uri === '' || uri === '/') {
        // /api/items
        if (req.method === 'GET') return getItemList(queryParams);
        if (req.method === 'POST') {
          const createdItem = createItem(await drainJson(req));
          res.statusCode = 201;
          res.setHeader('Access-Control-Expose-Headers', 'Location');
          res.setHeader('Location', `${URI_PREFIX}/${createdItem.id}`);
          return createdItem;
        }
      } else {
        // /api/items/{id}
        // параметр {id} из URI запроса
        const itemId = uri.substr(1);
        if (req.method === 'GET') return getItem(itemId);
        if (req.method === 'PATCH') return updateItem(itemId, await drainJson(req));
        if (req.method === 'DELETE') return deleteItem(itemId);
      }
      return null;
    })();
    res.end(JSON.stringify(body));
  } catch (err) {
    // обрабатываем сгенерированную нами же ошибку
    if (err instanceof ApiError) {
      res.writeHead(err.statusCode);
      res.end(JSON.stringify(err.data));
    } else {
      // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
      res.statusCode = 500;
      res.end(JSON.stringify({ message: 'Server Error' }));
      console.error(err);
    }
  }
})
  // выводим инструкцию, как только сервер запустился...
  .on('listening', () => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Сервер CRM запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
      console.log('Нажмите CTRL+C, чтобы остановить сервер');
      console.log('Доступные методы:');
      console.log(`GET ${URI_PREFIX} - получить список услуг, в query параметр search можно передать поисковый запрос`);
      console.log(`POST ${URI_PREFIX} - создать новую услугу, в теле запроса нужно передать объект { type: string, name: string, units: string, cost: number }`);
      console.log(`GET ${URI_PREFIX}/{id} - получить услугу по ID`);
      console.log(`PATCH ${URI_PREFIX}/{id} - изменить услугу с ID, в теле запроса нужно передать объект { type: string, name: string, units: string, cost: number }`);
      console.log(`DELETE ${URI_PREFIX}/{id} - удалить услугу по ID`);
    }
  })
  // ...и вызываем запуск сервера на указанном порту
  .listen(PORT);
