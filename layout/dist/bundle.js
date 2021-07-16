(()=>{"use strict";function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const t=function(){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.block=document.querySelector(e),this.button=document.querySelector(i)}var i,n;return i=t,(n=[{key:"toggle",value:function(){this.block.classList.toggle("header-contacts__phone-number-accord_active"),this.button.classList.toggle("header-contacts__arrow_active")}},{key:"run",value:function(){this.button.addEventListener("click",this.toggle.bind(this))}}])&&e(i.prototype,n),t}();function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const n=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=document.querySelector(t),this.menuSelector=t,this.menuBtn=i,this.menuClose=n,this.isMenuOpen=!1}var t,n;return t=e,(n=[{key:"toggle",value:function(){this.menu.classList.toggle("popup-dialog-menu_active"),this.isMenuOpen=!this.isMenuOpen}},{key:"run",value:function(){var e=this;document.addEventListener("click",(function(t){var i=t.target;(i.closest(e.menuBtn)||e.isMenuOpen&&(!i.closest(e.menuSelector)||i.closest(e.menuClose)||i.closest("a")))&&e.toggle()}))}}])&&i(t.prototype,n),e}();function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popups=[],this.popup=-1}var t,i;return t=e,(i=[{key:"addPopup",value:function(e){var t,i=e.callerSelector,n=e.selector,r=e.activeClass,o=e.closeBtn,a=e.activeSelector;this.popups.push({callerSelector:(t=i,function(e){if(Array.isArray(e))return s(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),selector:document.querySelector(n),activeClass:r,closeBtn:o,activeSelector:a})}},{key:"getPopupActiveSelector",value:function(e){this.popup>=0&&this.hidePopup.call(this,this.popup),this.togglePopup.call(this,{activeSelector:e})}},{key:"getActiveTab",value:function(e){this.popups[e].selector.classList.add(this.popups[e].activeClass),this.popup=e}},{key:"togglePopup",value:function(e){var t=this,i=e.target,n=e.activeSelector;if(this.popup<0)for(var s=function(e){if(n){if(t.popups[e].activeSelector===n)return t.getActiveTab.call(t,e),{v:void 0}}else t.popups[e].callerSelector.forEach((function(n){i.closest(n)&&t.getActiveTab.call(t,e)}))},o=0;o<this.popups.length;o++){var a=s(o);if("object"===r(a))return a.v}else(i.closest(this.popups[this.popup].closeBtn)||i===this.popups[this.popup].selector)&&this.hidePopup.call(this,this.popup)}},{key:"hidePopup",value:function(e){this.popups[e].selector.classList.remove(this.popups[e].activeClass),this.popup=-1}},{key:"run",value:function(){var e=this;document.addEventListener("click",(function(t){e.togglePopup({target:t.target})}))}}])&&o(t.prototype,i),e}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+d (ddd) ddd-dd-dd",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"7";l(this,e),this.elems=document.querySelectorAll(t),this.value="",this.mask=i,this.code=n}var t,i;return t=e,(i=[{key:"beginInput",value:function(e){0===e.value.length&&(e.value="+".concat(this.code," (")),this.value=e.value}},{key:"chekValue",value:function(e){(e=e.replace(/[^0-9]/g,"")).length>12&&(e=e.substr(0,11)),e[0]!==this.code&&(e=this.code+e);for(var t=this.mask,i=0;i<e.length;i++)t=t.replace("d",e[i]);return t.indexOf("d")>0&&(t=t.slice(0,t.indexOf("d"))),t.length>4&&(t=t.replace(/[^0-9]+$/,"")),t}},{key:"getValue",value:function(e){return e.length>this.value.length?(this.value=this.chekValue.call(this,e),this.value):e.length<4?(this.value="+".concat(this.code," ("),this.value):(this.value=e,this.value=this.chekValue.call(this,this.value),this.value)}},{key:"getMask",value:function(e){var t=e.value.length,i=e.selectionStart;e.value=this.getValue.call(this,e.value),t>i&&e.setSelectionRange(i,i)}},{key:"endInput",value:function(e){e.value.length<=4&&(e.value="")}},{key:"init",value:function(){var e=this;this.elems.forEach((function(t){t.addEventListener("focus",e.beginInput.bind(e,t)),t.addEventListener("input",e.getMask.bind(e,t)),t.addEventListener("blur",e.endInput.bind(e,t))}))}}])&&c(t.prototype,i),e}();function p(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const h=function(){function e(t){var i=t.selector,n=t.errorClassName,r=t.callBack;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.forms=document.querySelectorAll(i),this.errorClassName=n||"send-form-message-error",this.callBack=r}var t,i;return t=e,(i=[{key:"getErorMesage",value:function(e){var t=document.createElement("div");return t.className=this.errorClassName,t.textContent=e,t}},{key:"validate",value:function(e){var t=this,i=e.querySelectorAll("input"),n=i.length;return i.forEach((function(e){if("checkbox"===e.getAttribute("type"))if(e.checked)n--;else{var i=t.getErorMesage.call(t,"Подтвердите согласие");e.insertAdjacentElement("afterend",i),setTimeout((function(){return i.remove()}),1e3)}if("name"===e.name)if(e.value.length>=2)n--;else{var r=t.getErorMesage.call(t,"Введите коректное значение");e.insertAdjacentElement("afterend",r),setTimeout((function(){return r.remove()}),1e3)}if("phone"===e.name)if(e.value.length>17)n--;else{var s=t.getErorMesage.call(t,"Введите коректное значение");e.insertAdjacentElement("afterend",s),setTimeout((function(){return s.remove()}),1e3)}})),0===n}},{key:"sendForm",value:function(e){var t=this;if(event.preventDefault(),this.validate.call(this,e)&&e.querySelector('[type="checkbox"]').checked){var i=new FormData(e),n={};i.forEach((function(e,t){n[t]=e})),this.postData(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");t.callBack&&t.callBack()})).catch((function(e){console.error(e)})).finally(e.querySelectorAll("input").forEach((function(e){return e.value=""})))}}},{key:"postData",value:function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"init",value:function(){var e=this;this.forms.forEach((function(t){t.querySelectorAll("input").forEach((function(e){return e.removeAttribute("required")})),t.addEventListener("submit",e.sendForm.bind(e,t))}))}}])&&p(t.prototype,i),e}();function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const v=function(){function e(t,i,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elems=document.querySelectorAll(t),this.activeClass=i,this.popupClass=n,this.popups=[],this.popupRevers=r,this.grandParent=document.querySelector(".formula-slider-wrap")}var t,i;return t=e,(i=[{key:"showHint",value:function(e,t){e.classList.add(this.activeClass),this.moveHints.call(this,t),this.popups[t].getBoundingClientRect().y<0?this.popups[t].classList.add(this.popupRevers):this.popups[t].classList.remove(this.popupRevers)}},{key:"hideHint",value:function(e,t){e.classList.remove(this.activeClass),this.popups[t].classList.remove(this.popupRevers),this.popups[t].style=""}},{key:"moveHints",value:function(e){if(document.documentElement.clientWidth<=1024){var t=this.grandParent.getBoundingClientRect().left-this.popups[e].getBoundingClientRect().left,i=this.grandParent.getBoundingClientRect().right-this.popups[e].getBoundingClientRect().right;t>0&&(this.popups[e].style.left=5-t+"px"),i<0&&(this.popups[e].style.right=5+i+"px")}}},{key:"init",value:function(){var e=this;this.elems.forEach((function(t,i){e.popups.push(t.querySelector(e.popupClass)),t.addEventListener("mouseover",e.showHint.bind(e,t,i)),t.addEventListener("mouseout",e.hideHint.bind(e,t,i))}))}}])&&d(t.prototype,i),e}();function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const m=function(){function e(t){var i=this,n=t.wraper,r=t.slider,s=t.slide,o=t.prev,a=t.next,l=t.slideNum,c=t.slideCount,u=t.isDisabled,p=t.slideShow,h=t.breakPoints,d=t.callBack,v=t.paginationWraper,f=t.paginatinHTML,m=t.paginationSelector,y=t.paginationActiveClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wraper=document.querySelector(n),this.slider=this.wraper.querySelector(r),this.slide=this.slider.querySelectorAll(s),this.prev=o,this.prevBtn=document.querySelector(o),this.next=a,this.nextBtn=document.querySelector(a),this.sliderWidth=0,this.sliderHeight=0,this.position=0,this.slideNum=this.wraper.parentNode.querySelector(l),this.slideCount=this.wraper.parentNode.querySelector(c),this.isDisabled=!!u,this.slideShow=+p||1,this.breakPoints=h,h&&(this.breakPointsKeys=Object.keys(h),this.breakPointsKeys.forEach((function(e,t){return i.breakPointsKeys[t]=+e})),this.breakPointsKeys.sort((function(e,t){return e-t}))),this.listener=function(e){var t=e.target;t.closest(i.prev)&&i.prevSlide.call(i),t.closest(i.next)&&i.nextSlide.call(i),t.closest(i.paginationSelector)&&i.getSlideFromPagination.call(i,t)},this.resListener=this.recalculate.bind(this),this.callBack=d||null,this.paginationWraper=document.querySelector(v),this.paginatinHTML=f,this.paginationSelector=m,this.paginationActiveClass=y,this.paginationDots=""}var t,i;return t=e,(i=[{key:"getSlideFromPagination",value:function(e){var t=this;this.paginationDots.forEach((function(i,n){if(e.closest(t.paginationSelector)===i)return t.position=n,void t.moveSlider.call(t)}))}},{key:"getPagination",value:function(){this.paginationWraper.textContent="";for(var e=0;e<this.slide.length+1-this.slideShow;e++)this.paginationWraper.insertAdjacentHTML("beforeend",this.paginatinHTML);this.paginationDots=this.paginationWraper.querySelectorAll(this.paginationSelector)}},{key:"movePagination",value:function(){var e=this;this.paginationDots.forEach((function(t){return t.classList.remove(e.paginationActiveClass)})),this.paginationDots[this.position].classList.add(this.paginationActiveClass)}},{key:"getPosition",value:function(){return this.position}},{key:"setPosition",value:function(e){this.position=e,this.moveSlider.call(this)}},{key:"hideSlider",value:function(){this.slider.style.display="none"}},{key:"showSlider",value:function(){this.slider.style.display="flex"}},{key:"updateSlider",value:function(){var e=this;this.wraper.style.overflow="hidden",this.slider.style.justifyContent="space-around",this.sliderWidth=this.wraper.offsetWidth,this.slider.style.width=this.sliderWidth/this.slideShow*this.slide.length+"px",this.slider.style.maxWidth=this.sliderWidth/this.slideShow*this.slide.length+"px",this.slide.forEach((function(t){return t.style.width=e.sliderWidth/e.slideShow+"px"})),this.position=0,this.moveSlider()}},{key:"moveSlider",value:function(){this.isDisabled||(this.slider.style.transform="translateX(-".concat(this.position*this.sliderWidth/this.slideShow,"px)"),0===this.position?this.prevBtn.classList.add("unvisible"):this.prevBtn.classList.remove("unvisible"),this.position===this.slide.length-this.slideShow?this.nextBtn.classList.add("unvisible"):this.nextBtn.classList.remove("unvisible"),this.slideNum&&(this.slideNum.textContent=+this.position+1),this.slideCount&&(this.slideCount.textContent=this.slide.length),this.paginationDots&&this.movePagination(this.position),this.callBack&&this.callBack(this.position))}},{key:"enableSlider",value:function(){this.isDisabled=!1,this.updateSlider(),this.moveSlider(),this.addListeners()}},{key:"disableSlider",value:function(){this.isDisabled=!0,this.removeListeners()}},{key:"prevSlide",value:function(){this.position>0&&(this.position--,this.moveSlider.call(this))}},{key:"nextSlide",value:function(){this.position<this.slide.length-this.slideShow&&(this.position++,this.moveSlider.call(this))}},{key:"addListeners",value:function(){this.isDisabled||this.wraper.parentNode.parentNode.addEventListener("click",this.listener)}},{key:"removeListeners",value:function(){this.wraper.parentNode.removeEventListener("click",this.listener)}},{key:"init",value:function(){this.paginationWraper&&this.getPagination.call(this),this.recalculate.call(this),this.updateSlider(),this.addListeners(),this.resizeListener()}},{key:"recalculate",value:function(){var e=this;this.breakPointsKeys&&this.breakPointsKeys.forEach((function(t){if(document.documentElement.clientWidth>t)for(var i in e.breakPoints[t]){e[i]=e.breakPoints[t][i];break}})),this.updateSlider()}},{key:"resizeListener",value:function(){window.addEventListener("resize",this.resListener)}},{key:"removeRsizeListener",value:function(){window.removeEventListener("resize",this.resListener)}},{key:"clearStyles",value:function(){this.wraper.style.overflow="",this.slider.style.justifyContent="",this.slider.style.width="",this.slider.style.maxWidth="",this.slide.forEach((function(e){return e.style.width=""}))}},{key:"deleteSlider",value:function(){this.callBack="",this.removeListeners.call(this),this.removeRsizeListener.call(this),this.clearStyles.call(this)}}])&&f(t.prototype,i),e}();function y(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const b=function(){function e(t){var i=t.wraper,n=t.tabsBtn,r=t.tabsBtnActivClass,s=t.tabs;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wraper=document.querySelector(i),this.tabsBtnSelector=n,this.tabsBtn=document.querySelectorAll(n),this.tabsBtnActivClass=r,this.tabs=s,this.position=0}var t,i;return t=e,(i=[{key:"getTab",value:function(e){for(var t=0;t<this.tabsBtn.length;t++)this.tabsBtn[t].classList.remove(this.tabsBtnActivClass),this.tabs&&this.tabs[t].disableSlider(),this.tabs&&this.tabs[t].hideSlider(),e===this.tabsBtn[t]&&(this.position=t,this.tabsBtn[t].classList.add(this.tabsBtnActivClass),this.tabs&&this.tabs[t].enableSlider(),this.tabs&&this.tabs[t].showSlider())}},{key:"getActiveTab",value:function(e){this.getTab(this.tabsBtn[e])}},{key:"init",value:function(){var e=this;this.wraper.addEventListener("click",(function(t){var i=t.target.closest(e.tabsBtnSelector);i&&e.getTab.call(e,i)}))}}])&&y(t.prototype,i),e}();function g(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const w=function(){function e(t){var i=t.wraper,n=t.acardion,r=t.elems,s=t.elemsActiveClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wraper=document.querySelector(i),this.acardion=this.wraper.querySelector(n),this.elems=this.acardion.querySelectorAll(r),this.elemsSelector=r,this.elemsActiveClass=s}var t,i;return t=e,(i=[{key:"getActiveElem",value:function(e){var t=this;this.elems.forEach((function(i){return i===e?i.classList.add(t.elemsActiveClass):i.classList.remove(t.elemsActiveClass)})),setTimeout((function(){var t=e.getBoundingClientRect().top;window.scrollBy({top:t,behavior:"smooth"})}),550)}},{key:"init",value:function(){var e=this;this.wraper.addEventListener("click",(function(t){var i=t.target.closest(e.elemsSelector);i&&e.getActiveElem.call(e,i)}))}}])&&g(t.prototype,i),e}();function k(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=new(function(){function e(t){var i=t.server;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.server=i,this.dbInfo,this.db={},this.parentElement=document.querySelector(".popup-dialog-repair-types .row"),this.elems={type:this.parentElement.querySelector(".nav-list-popup-repair"),switchInner:this.parentElement.querySelector("#switch-inner"),contentBlock:this.parentElement.querySelector("tbody")},this.position=0,this.tabs,this.keys,this.isLoad=!1}var t,i;return t=e,(i=[{key:"parseDb",value:function(e){var t=this;e.forEach((function(e){t.db[e.type]||(t.db[e.type]=[]),t.db[e.type].push({name:e.name,units:e.units,cost:e.cost,id:e.id})}))}},{key:"getTabs",value:function(){var e=this;this.elems.type.textContent="",this.keys=k(Object.keys(this.db)),this.keys.forEach((function(t){return e.elems.type.insertAdjacentHTML("beforeend",'\n      <button class="button_o popup-repair-types-nav__item">'.concat(t,"</button>\n    "))})),this.tabs=k(this.elems.type.querySelectorAll(".popup-repair-types-nav__item"))}},{key:"setActiveTab",value:function(){this.tabs.forEach((function(e){return e.classList.remove("active")})),this.tabs[this.position].classList.add("active")}},{key:"getPageInfo",value:function(e){var t=this;this.isLoad&&(this.position=e,this.setActiveTab.call(this,e),this.elems.switchInner.textContent=this.keys[e],this.elems.contentBlock.textContent="",this.db[this.keys[e]].forEach((function(e){return t.elems.contentBlock.insertAdjacentHTML("beforeend",'\n        <tr class="mobile-row showHide">\n          <td class="repair-types-name">'.concat(e.name,'</td>\n          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n          <td class="repair-types-value">').concat("м2"===e.units?"м<sup>2</sup>":e.units,'</td>\n          <td class="repair-types-value">').concat(e.cost," руб.</td>\n        </tr>\n      "))})))}},{key:"addListeners",value:function(){var e=this;this.parentElement.addEventListener("click",(function(t){var i=t.target.closest(".popup-repair-types-nav__item");i&&e.getPageInfo.call(e,e.tabs.indexOf(i))}))}},{key:"getdbInfo",value:function(){var e=this;return fetch(this.server).then((function(e){if(200!==e.status)throw new Error("DB-error: Network status not 200");return e.json()})).then((function(t){e.parseDb.call(e,t),e.getTabs.call(e),e.isLoad=!0,e.addListeners.call(e),e.getPageInfo.call(e,0)})).catch((function(e){return console.error(e)}))}},{key:"getInfo",value:function(){this.getdbInfo.call(this)}}])&&_(t.prototype,i),e}())({server:"../crm-backend/db.json"});E.getInfo(),new t(".header-contacts__phone-number-accord",".header-contacts__arrow").run(),new n(".popup-dialog-menu",".menu__icon",".close-menu").run(),document.addEventListener("click",(function(e){var t=e.target.closest(".button-footer")||e.target.closest(".popup-menu-nav a");if(t&&!t.closest(".popup-servises")){e.preventDefault();var i=t.getAttribute("href"),n=i?document.getElementById(i.substring(1)).getBoundingClientRect().top:0;window.scrollTo({top:n,behavior:"smooth"})}})),new u('input[name="phone"]').init(),new v(".formula-item","active-item",".formula-item-popup","formula-item-popup_reverse").init();var C=new b({wraper:".nav-list-repair",tabsBtn:".repair-types-nav__item",tabsBtnActivClass:"active",tabs:function(){for(var e=[],t=1;t<=5;t++){var i=new m({wraper:".repair-types-slider",slider:".types-repair".concat(t),slide:".types-repair".concat(t," .repair-types-slider__slide"),prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total",isDisabled:1!==t||""});i.init(),e.push(i)}return e}()});C.init();var L=null,A=null,B=(document.querySelector(".nav-list-repair"),document.querySelectorAll(".repair-types-nav__item"),null),P=new b({wraper:".popup-dialog-portfolio",tabsBtn:".popup-portfolio-text",tabsBtnActivClass:"popup-portfolio-text-active"});P.init();var x=new m({wraper:".popup-portfolio-slider-wraper",slider:".popup-portfolio-slider",slide:".popup-portfolio-slider__slide",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total",callBack:P.getActiveTab.bind(P)});x.init();var T=null,q=function(){(L=new m({wraper:".repair-types-nav",slider:".nav-list-repair",slide:".repair-types-nav__item",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",callBack:C.getActiveTab.bind(C)})).init(),(A=new m({wraper:".formula-slider-wrap",slider:".formula-slider",slide:".formula-slider__slide",prev:"#formula-arrow_left",next:"#formula-arrow_right",slideShow:1,breakPoints:{768:{slideShow:3},0:{slideShow:1}}})).init(),setTimeout((function(){(T=new m({wraper:".nav-popup-repair-types-wraper",slider:".nav-list-popup-repair",slide:".popup-repair-types-nav__item",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right",callBack:E.getPageInfo.bind(E)})).init()}),1e3)},j=function(){(B=new m({wraper:".portfolio-slider-wraper-mobile",slider:".portfolio-slider-mobile",slide:".portfolio-slider__slide-frame",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total"})).init()};document.documentElement.clientWidth<=1024&&q(),document.documentElement.clientWidth<=575&&j(),window.matchMedia("(max-width: 1024px)").addEventListener("change",(function(e){e.matches?q():(L&&L.deleteSlider.call(L),L=null,A&&A.deleteSlider.call(A),A=null,T&&T.deleteSlider.call(T),T=null)}));var O=null,I=function(){(O=new m({wraper:".portfolio-slider-wraper",slider:".portfolio-slider",slide:".portfolio-slider__slide",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",slideShow:3,breakPoints:{1140:{slideShow:3},900:{slideShow:2},575:{slideShow:1}}})).init()};document.documentElement.clientWidth>575&&I(),window.matchMedia("(max-width: 575px)").addEventListener("change",(function(e){e.matches?(O&&O.deleteSlider.call(O),O=null,j()):(B&&B.deleteSlider.call(B),B=null,I())})),document.querySelector(".portfolio-slider-wraper").addEventListener("click",(function(e){var t=e.target.closest(".portfolio-slider__slide-frame");t&&x.setPosition.call(x,t.dataset.position)}));var M=null,W=function(){(M=new m({wraper:".transparency-slider-wrap",slider:".transparency-slider",slide:".transparency-item",prev:"#transparency-arrow_left",next:"#transparency-arrow_right"})).init()};document.documentElement.clientWidth<=1090&&W(),window.matchMedia("(max-width: 1090px)").addEventListener("change",(function(e){e.matches?(M&&M.deleteSlider.call(M),M=null):W()}));var D=new m({wraper:".popup-transparency-slider-wraper",slider:".popup-transparency-slider",slide:".popup-transparency-slider__slide",prev:"#transparency_left",next:"#transparency_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total",callBack:P.getActiveTab.bind(P)});D.init(),D.setPosition(1),document.querySelector(".transparency-slider").addEventListener("click",(function(e){var t=e.target.closest(".transparency-item");t&&D.setPosition.call(D,t.dataset.position)})),new m({wraper:".reviews-slider-wraper",slider:".reviews-slider",slide:".reviews-slider__slide",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",paginationWraper:".slider-dots-reviews",paginatinHTML:'<div class="dot dot-reviews switch"><div class="dot__inner"></div></div>',paginationSelector:".dot-reviews",paginationActiveClass:"dot_active"}).init();var N=new a;N.addPopup({callerSelector:[".popup-servises"],selector:".popup-repair-types",activeClass:"popup-active",closeBtn:".close"}),N.addPopup({callerSelector:[".link-privacy"],selector:".popup-privacy",activeClass:"popup-active",closeBtn:".close"}),N.addPopup({callerSelector:[".portfolio-slider__slide-frame"],selector:".popup-portfolio",activeClass:"popup-active",closeBtn:".close"}),N.addPopup({callerSelector:[".transparency-item"],selector:".popup-transparency",activeClass:"popup-active",closeBtn:".close"}),N.addPopup({callerSelector:[".consult"],selector:".popup-consultation",activeClass:"popup-active",closeBtn:".close"}),N.addPopup({callerSelector:[],selector:".popup-thank",activeClass:"popup-active",closeBtn:".close",activeSelector:"thank"}),N.run(),new w({wraper:".accordion",acardion:"ul",elems:"h2",elemsActiveClass:"msg-active"}).init(),new h({selector:"form",callBack:N.getPopupActiveSelector.bind(N,"thank")}).init()})();