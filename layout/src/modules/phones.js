
class Phones {
  constructor(block, button) {
    this.block = document.querySelector(block);
    this.button = document.querySelector(button);
  }

  toggle() {
    this.block.classList.toggle('header-contacts__phone-number-accord_active');
    this.button.classList.toggle('header-contacts__arrow_active');
  }

  run() {
    this.button.addEventListener('click', this.toggle.bind(this));
  }
}

export default Phones;
