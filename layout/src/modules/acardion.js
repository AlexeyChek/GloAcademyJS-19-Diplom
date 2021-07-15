class Acardion {
  constructor({
    wraper,
    acardion,
    elems,
    elemsActiveClass,
  }) {
    this.wraper = document.querySelector(wraper);
    this.acardion = this.wraper.querySelector(acardion);
    this.elems = this.acardion.querySelectorAll(elems);
    this.elemsSelector = elems;
    this.elemsActiveClass = elemsActiveClass;
  }

  getActiveElem(target) {
    this.elems.forEach(elem => (elem === target ? elem.classList.add(this.elemsActiveClass) : elem.classList.remove(this.elemsActiveClass)));
    setTimeout(() => {
      const position = target.getBoundingClientRect().top;
      window.scrollBy({
        top: position,
        behavior: 'smooth'
      });
    }, 550);
  }

  init() {
    this.wraper.addEventListener('click', event => {
      const target = event.target.closest(this.elemsSelector);
      if (target) this.getActiveElem.call(this, target);
    });
  }
}

export default Acardion;
