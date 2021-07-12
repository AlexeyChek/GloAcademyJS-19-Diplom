
import Phones from './modules/phones';
import MenuAndSmooth from './modules/menu';
import smooth from './modules/smooth';


const phones = new Phones('.header-contacts__phone-number-accord', '.header-contacts__arrow').run();
const menu = new MenuAndSmooth('.popup-dialog-menu', '.menu__icon', '.close-menu').run();
smooth();



