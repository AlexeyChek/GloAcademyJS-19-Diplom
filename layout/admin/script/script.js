'use strict';

const form = document.querySelector('form');
const userName = document.getElementById('name');
const userPassword = document.getElementById('type');

const userNameError = userName.nextElementSibling;
const userPasswordError = userPassword.nextElementSibling;

if (userNameError) userNameError.style.visibility = 'hidden';
if (userPasswordError) userPasswordError.style.visibility = 'hidden';

// авторизация
class User {
  constructor() {
    this.name = 63116079;
    this.password = 1216985755;
    this.site = 'index.html';
    this.base = 'table.html';
    this.isAuthorization = false;
  }

  addListener() {
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.checkAdmin.call(this, userName.value, userPassword.value);
    });
  }


  checkEnter() {
    if (document.location.href.slice(document.location.href.lastIndexOf('/') + 1) !== this.site) {
      if (document.cookie !== 'admin=enter') {
        document.location.replace(this.site);
      } else {
        this.isAuthorization = true;
      }
    } else {
      this.addListener();
    }
    return this.isAuthorization;
  }

  checkAdmin(userName, userPassword) {
    this.getResult((userName && userPassword) ? {
      userName: this.hashCode(userName) === this.name,
      userPassword: this.hashCode(userPassword) === this.password
    } : false);
  }

  getResult(data = this.checkAdmin(userName, userPassword)) {
    if (data) {
      if (!data.userName) {
        userNameError.style.visibility = 'visible';
      } else {
        userNameError.style.visibility = 'hidden';
      }
      if (!data.userPassword) {
        userPasswordError.style.visibility = 'visible';
      } else {
        userPasswordError.style.visibility = 'hidden';
      }
      if (data.userName && data.userPassword) {
        document.cookie = 'admin=enter';
        document.location.replace(this.base);
      }
    }
  }

  hashCode(str) {
    return str.split("").reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
}
const admin = new User();


// если авторизован и на странице table.html
if (admin.checkEnter()) {
  let selectWorkType = document.getElementById('typeItem');

  const start = () => {
    const tbody = document.getElementById('tbody'),
      modal = document.getElementById('modal'),
      form = document.querySelector('form'),
      modalHeader = document.querySelector('.modal__header'),
      type = document.getElementById('type'),
      name = document.getElementById('name'),
      units = document.getElementById('units'),
      cost = document.getElementById('cost');


    class TableData {
      constructor({
        connect
      }) {
        this.connect = connect;
        this.tr = ({ type, name, units, cost, id }) => `
        <tr class="table__row" id="${id}">
          <td class="table__id table__cell">${id}</td>
          <td class="table-type table__cell">${type}</td>
          <td class="table-name table__cell">
            ${name}
          </td>
          <td class="table-units table__cell">
            ${units}
          </td>
          <td class="table-cost table__cell">
            ${cost} руб
          </td>
          <td>
            <div class="table__actions table__cell">
              <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change">
                    <use xlink:href="./img/sprite.svg#change"></use>
                  </svg></span><span>Изменить</span>
              </button>
              <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove">
                    <use xlink:href="./img/sprite.svg#remove"></use>
                  </svg></span><span>Удалить</span>
              </button>
            </div>
          </td>
        </tr>
        `;
        this.id = '';
        this.workType;
      }

      getData(filter) {
        this.workType = filter;
        this.connect.getData(filter)
          .then(response => {
            tbody.textContent = '';
            response.forEach(item => tbody.insertAdjacentHTML('beforeend', this.tr(item)));
          });
      }

      showAddModal() {
        form.dataset.id = '';
        modalHeader.textContent = 'Добавение новой услуги';
        modal.style.display = 'flex';
        if (this.workType !== 'Все услуги') type.value = this.workType;
      }

      showRewireModal(id) {
        form.dataset.id = id;
        modalHeader.textContent = 'Редактировать услугу';
        modal.style.display = 'flex';
        const data = this.connect.getDataId(id)
          .then(response => {
            type.value = response.type;
            name.value = response.name;
            units.value = response.units;
            cost.value = response.cost;
          });
      }

      hideModal() {
        modal.style = '';
      }

      submitForm(id) {
        const data = {
          type: type.value,
          name: name.value,
          units: units.value,
          cost: cost.value
        };
        const submit = () => {
          if (id) {
            return this.connect.rewireInfo(data, id);
          } else {
            return this.connect.addInfo(data);
          }
        };
        submit().then(() => {
          this.clearForm();
          this.hideModal();
          this.getData(data.type);
        });
      }

      removeItem(id) {
        this.connect.removeData(id);
        this.getData(this.workType);
      }

      actions(target) {
        if (target.closest('.btn-addItem')) this.showAddModal();
        if (target.closest('.button__close') || target === modal) this.hideModal();
        if (target.closest('.cancel-button')) {
          event.preventDefault();
          this.clearForm();
          this.hideModal();
        }
        if (target.closest('.action-change')) this.showRewireModal(target.closest('tr').id);
        if (target.closest('.action-remove')) this.removeItem(target.closest('tr').id);
      }

      clearForm() {
        type.value = '';
        name.value = '';
        units.value = '';
        cost.value = '';
      }

      addListeners() {
        selectWorkType.addEventListener('change', () => {
          this.getData.call(this, selectWorkType.options[selectWorkType.selectedIndex].value);
        });
        document.addEventListener('click', event => {
          const target = event.target;
          this.actions.call(this, target);
        });
        form.addEventListener('submit', e => {
          e.preventDefault();
          this.submitForm.call(this, form.dataset.id);
        });
      }

      init() {
        selectWorkType = document.getElementById('typeItem');
        this.addListeners();
        this.getData('Все услуги');
      }
    }

    const tableData = new TableData({
      connect: connectDB,
    });
    tableData.init();
  };


  // работа с db.json
  class ConnectDB {
    constructor({
      server,
    }) {
      this.server = server;
      this.worksType = new Set();
      this.db = {};
    }

    getSelectWorkType() {
      this.db.forEach(item => this.worksType.add(item.type));
      selectWorkType.textContent = '';
      selectWorkType.insertAdjacentHTML('beforeend', '<option value="Все услуги">Все услуги</option>');
      this.worksType.forEach(item => selectWorkType.insertAdjacentHTML('beforeend', `
        <option value="${item}">${item}</option>      
      `));
    }

    connect() {
      return fetch(this.server + '/api/items')
        .then(response => {
          if (response.status !== 200) {
            throw new Error('DB-error: Network status not 200');
          }
          return response.json();
        })
        .then(response => {
          this.db = response;
          this.getSelectWorkType();
          return response;
        })
        .catch(error => console.error(error));
    }

    getDataId(id) {
      return fetch(this.server + `/api/items/${id}`)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('DB-error: Network status not 200');
          }
          return response.json();
        })
        .then(response => response)
        .catch(error => console.error(error));
    }

    removeData(id) {
      return fetch(this.server + `/api/items/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('DB-error: Network status not 200');
          }
          this.getSelectWorkType.call(this);
          return response.json();
        })
        .catch(error => console.error(error));
    }

    rewireInfo({ type, name, units, cost }, id) {
      return fetch(this.server + `/api/items/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ type, name, units, cost })
      })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('DB-error: Network status not 200');
          }
          this.getSelectWorkType.call(this);
          return response.json();
        })
        .catch(error => console.error(error));
    }

    addInfo({ type, name, units, cost }) {
      return fetch(this.server + '/api/items', {
        method: 'POST',
        body: JSON.stringify({ type, name, units, cost })
      })
        .then(response => {
          if (response.status < 200 || response.status > 299) {
            throw new Error('connect DB error');
          }
          this.getSelectWorkType.call(this);
          return response.json();
        })
        .catch(error => console.error(error));
    }

    getData(filter) {
      if (filter === 'Все услуги') {
        return this.connect();
      } else {
        return this.connect().then(response => response.filter(item => item.type === filter));
      }
    }

    init() {
      this.getData()
        .then(response => {
          this.getSelectWorkType.call(this);
          start();
          return response;
        });
    }
  }
  const connectDB = new ConnectDB({
    server: 'http://localhost:3000',
  });
  connectDB.init();
}





