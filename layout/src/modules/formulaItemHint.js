class FormulaItemHint {
  constructor(elemClass, activeClass, popupClass, popupRevers) {
    this.elems = document.querySelectorAll(elemClass);
    this.activeClass = activeClass;
    this.popupClass = popupClass;
    this.popups = [];
    this.popupRevers = popupRevers;
    this.grandParent = document.querySelector('.formula-slider-wrap');
  }

  showHint(elem, index) {
    elem.classList.add(this.activeClass);
    this.moveHints.call(this, index);
    if (this.popups[index].getBoundingClientRect().y < 0) {
      this.popups[index].classList.add(this.popupRevers);
    } else {
      this.popups[index].classList.remove(this.popupRevers);
    }
  }

  hideHint(elem, index) {
    elem.classList.remove(this.activeClass);
    this.popups[index].classList.remove(this.popupRevers);
    this.popups[index].style = '';
  }

  moveHints(index) {
    if (document.documentElement.clientWidth <= 1024) {
      const left = this.grandParent.getBoundingClientRect().left - this.popups[index].getBoundingClientRect().left;
      const right = this.grandParent.getBoundingClientRect().right - this.popups[index].getBoundingClientRect().right;
      if (left > 0) this.popups[index].style.left = (5 - left) + 'px';
      if (right < 0) this.popups[index].style.right = (5 + right) + 'px';
    }
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
