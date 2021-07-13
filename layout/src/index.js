
import Phones from './modules/phones';
import MenuAndSmooth from './modules/menu';
import smooth from './modules/smooth';
import Popup from './modules/popup';
import MaskPhone from './modules/maskPhone';


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
popup.run();

new MaskPhone('input[name="phone"]').init();

