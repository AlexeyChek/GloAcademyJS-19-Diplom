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
    const tbody = document.getElementById('tbody');
    const modal = document.getElementById('modal');
    const form = document.querySelector('form');


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
      }

      getData(filter) {
        const data = this.connect.getData(filter);
        tbody.textContent = '';
        if (data) data.forEach(item => tbody.insertAdjacentHTML('beforeend', this.tr(item)));
      }

      showModal() {
        modal.style.display = 'flex';
      }

      hideModal() {
        modal.style = '';
      }

      submitForm() {
        const data = {
          type: form.elements.type.value,
          name: form.elements.name.value,
          units: form.elements.units.value,
          cost: form.elements.cost.value,
        };
        console.log(data);
      }

      actions(target) {
        if (target.closest('.btn-addItem')) this.showModal();
        if (target.closest('.button__close') || target === modal) this.hideModal();
      }

      addListeners() {
        selectWorkType.addEventListener('change', () => {
          this.getData.call(this, selectWorkType.options[selectWorkType.selectedIndex].value);
        });
        document.addEventListener('click', event => {
          const target = event.target;
          this.actions.call(this, target);
        });
        form.addEventListener('submit', event => {
          event.preventDefault();
          this.submitForm.call(this);
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
      this.db;
      this.worksType = new Set();
    }

    getSelectWorkType() {
      this.db.forEach(item => this.worksType.add(item.type));
      selectWorkType.textContent = '';
      selectWorkType.insertAdjacentHTML('beforeend', '<option value="Все услуги">Все услуги</option>');
      this.worksType.forEach(item => selectWorkType.insertAdjacentHTML('beforeend', `
        <option value="${item}">${item}</option>      
      `));
      start();
    }

    connect(body) {
      return fetch(this.server + body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('DB-error: Network status not 200');
          }
          return response.json();
        })
        // .then(response => response)
        .catch(error => console.error(error));
    }

    getData(filter) {
      if (filter === 'Все услуги') {
        return this.db;
      } else {
        return this.db.filter(item => item.type === filter);
      }
    }

    init() {
      this.connect('/api/items')
        .then(response => {
          this.db = response;
          this.getSelectWorkType.call(this);
        });
    }
  }
  const connectDB = new ConnectDB({
    server: 'http://localhost:3000',
  });
  connectDB.init();


  // работа с таблицей.

}





