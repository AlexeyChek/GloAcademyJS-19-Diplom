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

new MaskPhone('input[name="phone"]').init();

new SendForm('form').init();

new FormulaItemHint(
  '.formula-item',
  'active-item',
  '.formula-item-popup',
  'formula-item-popup_reverse'
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
      isDisabled: i === 1 ? '' : true
    });
    slider.init();
    sliders.push(slider);
  }
  return sliders;
};

const repairTabs = new Tabs({
  wraper: '.nav-list-repair',
  tabsBtn: '.repair-types-nav__item',
  tabsBtnActivClass: 'active',
  tabs: repairSliders()
});
repairTabs.init();

let repairSlider = null;
let formulaSlider = null;
const formulaSliderWraper = document.querySelector('.nav-list-repair');
const tabsBtn = document.querySelectorAll('.repair-types-nav__item');
let portfolioSliderMobile = null;

const portfolioPopupText = new Tabs({
  wraper: '.popup-dialog-portfolio',
  tabsBtn: '.popup-portfolio-text',
  tabsBtnActivClass: 'popup-portfolio-text-active',
});
portfolioPopupText.init();

const portfolioPopupSlider = new Slider({
  wraper: '.popup-portfolio-slider-wraper',
  slider: '.popup-portfolio-slider',
  slide: '.popup-portfolio-slider__slide',
  prev: '#popup_portfolio_left',
  next: '#popup_portfolio_right',
  slideNum: '.slider-counter-content__current',
  slideCount: '.slider-counter-content__total',
  callBack: portfolioPopupText.getActiveTab.bind(portfolioPopupText)
});
portfolioPopupSlider.init();

const getSlidersTablet = () => {
  repairSlider = new Slider({
    wraper: '.repair-types-nav',
    slider: '.nav-list-repair',
    slide: '.repair-types-nav__item',
    prev: '#nav-arrow-repair-left_base',
    next: '#nav-arrow-repair-right_base',
    callBack: repairTabs.getActiveTab.bind(repairTabs)
  });
  repairSlider.init();

  formulaSlider = new Slider({
    wraper: '.formula-slider-wrap',
    slider: '.formula-slider',
    slide: '.formula-slider__slide',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    slideShow: 3,
  });
  formulaSlider.init();
};

const getSlidersMobile = () => {
  portfolioSliderMobile = new Slider({
    wraper: '.portfolio-slider-wraper-mobile',
    slider: '.portfolio-slider-mobile',
    slide: '.portfolio-slider__slide-frame',
    prev: '#portfolio-arrow-mobile_left',
    next: '#portfolio-arrow-mobile_right',
    slideNum: '.slider-counter-content__current',
    slideCount: '.slider-counter-content__total',
  });
  portfolioSliderMobile.init();
};

if (document.documentElement.clientWidth <= 1024) getSlidersTablet();
if (document.documentElement.clientWidth <= 575) getSlidersMobile();

const widthTableMatch = window.matchMedia('(max-width: 1024px)');
widthTableMatch.addEventListener('change', widthChange => {
  if (widthChange.matches) {
    getSlidersTablet();
  } else {
    if (repairSlider) repairSlider.deleteSlider.call(repairSlider);
    repairSlider = null;
    if (formulaSlider) formulaSlider.deleteSlider.call(formulaSlider);
    formulaSlider = null;
  }
});

let portfolioSlider = null;

const getSlidersDesltop = () => {
  portfolioSlider = new Slider({
    wraper: '.portfolio-slider-wraper',
    slider: '.portfolio-slider',
    slide: '.portfolio-slider__slide',
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',
    slideShow: 3,
    breakPoints: {
      '1140': { slideShow: 3 },
      '900': { slideShow: 2 },
      '575': { slideShow: 1 },
    },
  });
  portfolioSlider.init();
};


if (document.documentElement.clientWidth > 575) getSlidersDesltop();

const widthMobileMatch = window.matchMedia('(max-width: 575px)');
widthMobileMatch.addEventListener('change', widthChange => {
  if (widthChange.matches) {
    if (portfolioSlider) portfolioSlider.deleteSlider.call(portfolioSlider);
    portfolioSlider = null;
    getSlidersMobile();
  } else {
    if (portfolioSliderMobile) portfolioSliderMobile.deleteSlider.call(portfolioSliderMobile);
    portfolioSliderMobile = null;
    getSlidersDesltop();
  }
});

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
popup.addPopup({
  callerSelector: ['.portfolio-slider__slide-frame'],
  selector: '.popup-portfolio',
  activeClass: 'popup-active',
  closeBtn: '.close',
});
popup.run();

const getPortfolioPopupSlide = () => {
  document.querySelector('.portfolio-slider-wraper').addEventListener('click', event => {
    const target = event.target.closest('.portfolio-slider__slide-frame');
    if (target) {
      portfolioPopupSlider.setPosition.call(portfolioPopupSlider, target.dataset.position);
    }
  });
};
getPortfolioPopupSlide();

let transparencySlider = null;

const getTransparencySlider = () => {
  transparencySlider = new Slider({
    wraper: '.transparency-slider-wrap',
    slider: '.transparency-slider',
    slide: '.transparency-item',
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right'
  });
  transparencySlider.init();
};

if (document.documentElement.clientWidth <= 1090) getTransparencySlider();

const widthTransparencySliderMatch = window.matchMedia('(max-width: 1090px)');
widthTransparencySliderMatch.addEventListener('change', widthChange => {
  if (widthChange.matches) {
    if (transparencySlider) transparencySlider.deleteSlider.call(transparencySlider);
    transparencySlider = null;
  } else {
    getTransparencySlider();
  }
});

