'use strict';

const form = document.querySelector('form');
const userName = document.getElementById('name');
const userPassword = document.getElementById('type');

const userNameError = userName.nextElementSibling;
const userPasswordError = userPassword.nextElementSibling;

if (userNameError) userNameError.style.visibility = 'hidden';
if (userPasswordError) userPasswordError.style.visibility = 'hidden';


class User {
  constructor() {
    this.name = 63116079;
    this.password = 1216985755;
    this.site = 'index.html';
    this.base = 'table.html';
  }

  addListener() {
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.checkAdmin.call(this, userName.value, userPassword.value);
    });
  }


  checkEnter() {
    if (document.location.href.slice(document.location.href.lastIndexOf('/') + 1) !== this.site) {
      if (document.cookie !== 'admin=enter') document.location.replace(this.site);
    }
    this.addListener();
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
admin.checkEnter();

