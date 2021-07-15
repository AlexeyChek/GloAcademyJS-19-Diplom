class SendForm {
  constructor({
    selector,
    errorClassName,
    callBack,
  }) {
    this.forms = document.querySelectorAll(selector);
    this.errorClassName = errorClassName || 'send-form-message-error';
    this.callBack = callBack;
  }

  getErorMesage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = this.errorClassName;
    errorMessage.textContent = message;
    return errorMessage;
  }

  validate(form) {
    const inputs = form.querySelectorAll('input');
    let result = inputs.length;

    inputs.forEach(elem => {
      if (elem.getAttribute('type') === 'checkbox') {
        if (elem.checked) {
          result--;
        } else {
          const errorMessage = this.getErorMesage.call(this, 'Подтвердите согласие');
          elem.insertAdjacentElement('afterend', errorMessage);
          setTimeout(() => errorMessage.remove(), 1000);
        }
      }
      if (elem.name === 'name') {
        if (elem.value.length >= 2) {
          result--;
        } else {
          const errorMessage = this.getErorMesage.call(this, 'Введите коректное значение');
          elem.insertAdjacentElement('afterend', errorMessage);
          setTimeout(() => errorMessage.remove(), 1000);
        }
      }
      if (elem.name === 'phone') {
        if (elem.value.length > 17) {
          result--;
        } else {
          const errorMessage = this.getErorMesage.call(this, 'Введите коректное значение');
          elem.insertAdjacentElement('afterend', errorMessage);
          setTimeout(() => errorMessage.remove(), 1000);
        }
      }
    });
    return result === 0;
  }

  sendForm(form) {
    event.preventDefault();
    if (!this.validate.call(this, form)) return;
    if (form.querySelector('[type="checkbox"]').checked) {
      const formData = new FormData(form);
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      this.postData(body).then(response => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        if (this.callBack) this.callBack();
        return;
      }).catch(error => {
        console.error(error);
      }).finally(form.querySelectorAll('input').forEach(input => input.value = ''));
    }
  }

  postData(body) {
    return fetch('server.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  }

  init() {
    this.forms.forEach(form => {
      form.querySelectorAll('input').forEach(elem => elem.removeAttribute('required'));
      form.addEventListener('submit', this.sendForm.bind(this, form));
    });
  }
}

export default SendForm;
