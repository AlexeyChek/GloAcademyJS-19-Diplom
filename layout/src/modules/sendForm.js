class SendForm {
  constructor(selector) {
    this.forms = document.querySelectorAll(selector);
  }

  sendForm(form) {
    event.preventDefault();
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
    this.forms.forEach(form => form.addEventListener('submit', this.sendForm.bind(this, form)));
  }
}

export default SendForm;
