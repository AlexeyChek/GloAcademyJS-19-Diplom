class FormulaItemHint {
  constructor(elemClass, activeClass, popupClass, popupRevers) {
    this.elems = document.querySelectorAll(elemClass);
    this.activeClass = activeClass;
    this.popupClass = popupClass;
    this.popups = [];
    this.popupRevers = popupRevers;
  }

  showHint(elem, index) {
    elem.classList.add(this.activeClass);
    if (this.popups[index].getBoundingClientRect().y < 0) {
      this.popups[index].classList.add(this.popupRevers);
    } else {
      this.popups[index].classList.remove(this.popupRevers);
    }
  }

  hideHint(elem, index) {
    elem.classList.remove(this.activeClass);
    this.popups[index].classList.remove(this.popupRevers);
  }

  init() {
    this.elems.forEach((elem, index)=> {
      this.popups.push(elem.querySelector(this.popupClass));
      elem.addEventListener('mouseover', this.showHint.bind(this, elem, index));
      elem.addEventListener('mouseout', this.hideHint.bind(this, elem, index));
    });
  }
}

export default FormulaItemHint;
