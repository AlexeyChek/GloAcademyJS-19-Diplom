class Tabs {
  constructor({
    wraper,
    tabsBtn,
    tabsBtnActivClass,
    tabs,
  }) {
    this.wraper = document.querySelector(wraper);
    this.tabsBtnSelector = tabsBtn;
    this.tabsBtn = document.querySelectorAll(tabsBtn);
    this.tabsBtnActivClass = tabsBtnActivClass;
    this.tabs = tabs;
    this.position = 0;
  }

  getTab(target) {
    for (let i = 0; i < this.tabsBtn.length; i++) {
      this.tabsBtn[i].classList.remove(this.tabsBtnActivClass);
      if (this.tabs) this.tabs[i].disableSlider();
      if (this.tabs) this.tabs[i].hideSlider();
      if (target === this.tabsBtn[i]) {
        this.position = i;
        this.tabsBtn[i].classList.add(this.tabsBtnActivClass);
        if (this.tabs) this.tabs[i].enableSlider();
        if (this.tabs) this.tabs[i].showSlider();
      }
    }
  }

  getActiveTab(position) {
    this.getTab(this.tabsBtn[position]);
  }

  init() {
    this.wraper.addEventListener('click', event => {
      const target = event.target.closest(this.tabsBtnSelector);
      if (target) this.getTab.call(this, target);
    });
  }
}

export default Tabs;
