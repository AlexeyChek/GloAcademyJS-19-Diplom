class GetDBInfo {
  constructor({
    server,
  }) {
    this.server = server;
    this.dbInfo;
    this.db = {};
    this.parentElement = document.querySelector('.popup-dialog-repair-types .row');
    this.elems = {
      type: this.parentElement.querySelector('.nav-list-popup-repair'),
      switchInner: this.parentElement.querySelector('#switch-inner'),
      contentBlock: this.parentElement.querySelector('tbody')
    };
    this.position = 0;
    this.tabs;
    this.keys;
    this.isLoad = false;
  }

  parseDb(data) {
    data.forEach(item => {
      if (!this.db[item.type]) {
        this.db[item.type] = [];
      }
      this.db[item.type].push({
        name: item.name,
        units: item.units,
        cost: item.cost,
        id: item.id,
      });
    });
  }

  getTabs() {
    this.elems.type.textContent = '';
    this.keys = [...Object.keys(this.db)];
    this.keys.forEach(key => this.elems.type.insertAdjacentHTML('beforeend', `
      <button class="button_o popup-repair-types-nav__item">${key}</button>
    `));
    this.tabs = [...this.elems.type.querySelectorAll('.popup-repair-types-nav__item')];
  }

  setActiveTab() {
    this.tabs.forEach(elem => elem.classList.remove('active'));
    this.tabs[this.position].classList.add('active');
  }

  getPageInfo(key) {
    if (this.isLoad) {
      this.position = key;
      this.setActiveTab.call(this, key);
      this.elems.switchInner.textContent = this.keys[key];
      this.elems.contentBlock.textContent = '';
      this.db[this.keys[key]].forEach(item => this.elems.contentBlock.insertAdjacentHTML('beforeend', `
        <tr class="mobile-row showHide">
          <td class="repair-types-name">${item.name}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
          <td class="repair-types-value">${item.units === 'м2' ? 'м<sup>2</sup>' : item.units}</td>
          <td class="repair-types-value">${item.cost} руб.</td>
        </tr>
      `));
    }
  }

  addListeners() {
    this.parentElement.addEventListener('click', event => {
      const target = event.target.closest('.popup-repair-types-nav__item');
      if (target) this.getPageInfo.call(this, this.tabs.indexOf(target));
    });
  }

  getdbInfo() {
    return fetch(this.server)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('DB-error: Network status not 200');
        }
        return response.json();
      })
      .then(response => {
        this.parseDb.call(this, response);
        this.getTabs.call(this);
        this.isLoad = true;
        this.addListeners.call(this);
        this.getPageInfo.call(this, 0);
      })
      .catch(error => console.error(error));
  }

  getInfo() {
    this.getdbInfo.call(this);
  }
}


export default GetDBInfo;
