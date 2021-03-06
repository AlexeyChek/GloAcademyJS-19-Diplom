
class Popup {
  constructor() {
    this.popups = [];
    this.popup = -1;
  }

  addPopup({
    callerSelector,
    selector,
    activeClass,
    closeBtn,
    activeSelector
  }) {
    this.popups.push({
      callerSelector: [...callerSelector],
      selector: document.querySelector(selector),
      activeClass,
      closeBtn,
      activeSelector
    });
  }

  getPopupActiveSelector(activeSelector) {
    if (this.popup >= 0) this.hidePopup.call(this, this.popup);
    this.togglePopup.call(this, { activeSelector });
  }

  getActiveTab(i) {
    this.popups[i].selector.classList.add(this.popups[i].activeClass);
    this.popup = i;
  }

  togglePopup({ target, activeSelector }) {
    for (let i = 0; i < this.popups.length; i++) {
      if (activeSelector) {
        if (this.popups[i].activeSelector === activeSelector) {
          this.getActiveTab.call(this, i);
          return;
        }
      } else {
        this.popups[i].callerSelector.forEach(item => {
          if (target.closest(item)) {
            this.getActiveTab.call(this, i);
            return;
          }
        });
      }
    }
    for (let i = 0; i < this.popups.length; i++) {
      if (target.closest(this.popups[i].closeBtn) || (target === this.popups[i].selector)) this.hidePopup.call(this, i);
    }
  }

  hidePopup(i) {
    this.popups[i].selector.classList.remove(this.popups[i].activeClass);
    this.popup = -1;
  }

  run() {
    document.addEventListener('click', event => {
      this.togglePopup({ target: event.target });
    });
  }
}

export default Popup;


