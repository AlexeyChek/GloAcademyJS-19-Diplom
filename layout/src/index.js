
import Phones from './modules/phones';
import MenuAndSmooth from './modules/menu';
import smooth from './modules/smooth';
import Popup from './modules/popup';
import MaskPhone from './modules/maskPhone';
import SendForm from './modules/sendForm';
import FormulaItemHint from './modules/formulaItemHint';


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

new FormulaItemHint('.formula-item', 'active-item', '.formula-item-popup', 'formula-item-popup_reverse').init();
