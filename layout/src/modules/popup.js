
class Popup {
  constructor() {
    this.popups = [];
    this.popup = -1;
  }

  addPopup({
    callerSelector,
    selector,
    activeClass,
    closeBtn
  }) {
    this.popups.push({
      callerSelector: [...callerSelector],
      selector: document.querySelector(selector),
      activeClass,
      closeBtn
    });
  }

  togglePopup(target) {
    if (this.popup < 0) {
      for (let i = 0; i < this.popups.length; i++) {
        this.popups[i].callerSelector.forEach(item => {
          if (target.closest(item)) {
            this.popups[i].selector.classList.add(this.popups[i].activeClass);
            this.popup = i;
            return;
          }
        });
      }
    } else {
      if (target.closest(this.popups[this.popup].closeBtn)) {
        this.popups[this.popup].selector.classList.remove(this.popups[this.popup].activeClass);
        this.popup = -1;
      }
    }
  }

  run() {
    document.addEventListener('click', event => {
      this.togglePopup(event.target);
    });
  }
}

export default Popup;


