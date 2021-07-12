const smooth = () => {

  document.addEventListener('click', event => {
    const target = event.target.closest('.button-footer') || (event.target.closest('.popup-menu-nav a'));
    if (target && !target.closest('.popup-servises')) {
      event.preventDefault();
      const href = target.getAttribute('href');
      const position = href ? document.getElementById(href.substring(1)).getBoundingClientRect().top : 0;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  });
};

export default smooth;
