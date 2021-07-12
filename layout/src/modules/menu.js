
class Menu {
  constructor(menu, menuBtn, menuClose) {
    this.menu = document.querySelector(menu);
    this.menuSelector = menu;
    this.menuBtn = menuBtn;
    this.menuClose = menuClose;
    this.isMenuOpen = false;
  }

  toggle() {
    this.menu.classList.toggle('popup-dialog-menu_active');
    this.isMenuOpen = !this.isMenuOpen;
  }

  run() {
    document.addEventListener('click', event => {
      const target = event.target;
      if (target.closest(this.menuBtn)) {
        this.toggle();
      } else if (this.isMenuOpen) {
        if (!target.closest(this.menuSelector) || target.closest(this.menuClose) || target.closest('a')) {
          this.toggle();
        }
      }
    });
  }
}

export default Menu;
