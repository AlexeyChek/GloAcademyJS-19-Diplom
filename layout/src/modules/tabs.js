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

  getTab(target) {
    for (let i = 0; i < this.tabsBtn.length; i++) {
      this.tabsBtn[i].classList.remove(this.tabsBtnActivClass);
      this.tabs[i].disableSlider();
      this.tabs[i].hideSlider();
      if (target === this.tabsBtn[i]) {
        this.position = i;
        this.tabsBtn[i].classList.add(this.tabsBtnActivClass);
        this.tabs[i].enableSlider();
        this.tabs[i].showSlider();
      }
    }
  }

  init() {
    this.wraper.addEventListener('click', event => {
      const target = event.target.closest(this.tabsBtnSelector);
      if (target) this.getTab.call(this, target);
    });
  }
}

export default Tabs;
