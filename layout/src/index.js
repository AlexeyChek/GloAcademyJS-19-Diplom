import Phones from './modules/phones';
import MenuAndSmooth from './modules/menu';
import smooth from './modules/smooth';
import Popup from './modules/popup';
import MaskPhone from './modules/maskPhone';
import SendForm from './modules/sendForm';
import FormulaItemHint from './modules/formulaItemHint';
import Slider from './modules/slider';
import Tabs from './modules/tabs';


new Phones('.header-contacts__phone-number-accord', '.header-contacts__arrow').run();

new MenuAndSmooth('.popup-dialog-menu', '.menu__icon', '.close-menu').run();

smooth();

const popup = new Popup();
popup.addPopup({
  callerSelector: ['.popup-servises'],
  selector: '.popup-repair-types',
  activeClass: 'popup-active',
  closeBtn: '.close'
});
popup.addPopup({
  callerSelector: ['.link-privacy'],
  selector: '.popup-privacy',
  activeClass: 'popup-active',
  closeBtn: '.close'
});
popup.run();

new MaskPhone('input[name="phone"]').init();

new SendForm('form').init();

new FormulaItemHint(
  '.formula-item',
  'active-item',
  '.formula-item-popup',
  'formula-item-popup_reverse'
).init();

const formulaSlider = new Slider({
  wraper: '.formula-slider-wrap',
  slider: '.formula-slider',
  slide: '.formula-slider__slide',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right'
}
).init();

const repairSliders = () => {
  const sliders = [];
  for (let i = 1; i <= 5; i++) {
    const slider = new Slider({
      wraper: '.repair-types-slider',
      slider: `.types-repair${i}`,
      slide: `.types-repair${i} .repair-types-slider__slide`,
      prev: '#repair-types-arrow_left',
      next: '#repair-types-arrow_right',
      slideNum: '.slider-counter-content__current',
      slideCount: '.slider-counter-content__total',
      isEnabled: i === 1
    });
    slider.init();
    sliders.push(slider);
  }
  return sliders;
};

const tabs = new Tabs(
  '.nav-list-repair',
  '.repair-types-nav__item',
  'active',
  repairSliders()
).init();

if (document.documentElement.clientWidth <= 1024) {
  const slider = new Slider({
    wraper: '.repair-types-nav',
    slider: '.nav-list-repair',
    slide: '.repair-types-nav__item',
    prev: '#nav-arrow-repair-left_base',
    next: '#nav-arrow-repair-right_base',
  }).init();
};


