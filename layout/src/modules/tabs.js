class Tabs {
  constructor(wraper, tabsBtn, tabsBtnActivClass, tabs) {
    this.wraper = document.querySelector(wraper);
    this.tabsBtnSelector = tabsBtn;
    this.tabsBtn = document.querySelectorAll(tabsBtn);
    this.tabsBtnActivClass = tabsBtnActivClass;
    this.tabs = tabs;
    this.position = 0;
    this.tabHeight = this.tabs[0].offsetHeight;
  }

  getTab({ target, position }) {
    if (target && target !== this.tabsBtn[this.position]) {
      this.tabsBtn[this.position].classList.remove(this.tabsBtnActivClass);
      this.tabs[this.position].disableSlider();
      this.tabs[this.position].hideSlider();
      this.tabsBtn.forEach((elem, index) => {
        if (target === elem) {
          this.position = index;
          elem.classList.add(this.tabsBtnActivClass);
          this.tabs[index].showSlider();
          this.tabs[index].enableSlider();
        }
      });
    } else {
      if (position) this.getTab.call(this, { trget: this.tabs[position] });
    }
  }

  init() {
    this.wraper.addEventListener('click', event => {
      const target = event.target.closest(this.tabsBtnSelector);
      this.getTab.call(this, { target });
    });
    for (let i = this.tabsBtn.length; i >= 0; i--) {
      this.getTab({ position: i });
    }
  }
}

export default Tabs;
