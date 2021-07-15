(()=>{"use strict";function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const t=function(){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.block=document.querySelector(e),this.button=document.querySelector(i)}var i,n;return i=t,(n=[{key:"toggle",value:function(){this.block.classList.toggle("header-contacts__phone-number-accord_active"),this.button.classList.toggle("header-contacts__arrow_active")}},{key:"run",value:function(){this.button.addEventListener("click",this.toggle.bind(this))}}])&&e(i.prototype,n),t}();function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const n=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=document.querySelector(t),this.menuSelector=t,this.menuBtn=i,this.menuClose=n,this.isMenuOpen=!1}var t,n;return t=e,(n=[{key:"toggle",value:function(){this.menu.classList.toggle("popup-dialog-menu_active"),this.isMenuOpen=!this.isMenuOpen}},{key:"run",value:function(){var e=this;document.addEventListener("click",(function(t){var i=t.target;(i.closest(e.menuBtn)||e.isMenuOpen&&(!i.closest(e.menuSelector)||i.closest(e.menuClose)||i.closest("a")))&&e.toggle()}))}}])&&i(t.prototype,n),e}();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popups=[],this.popup=-1}var t,i;return t=e,(i=[{key:"addPopup",value:function(e){var t,i=e.callerSelector,n=e.selector,r=e.activeClass,o=e.closeBtn;this.popups.push({callerSelector:(t=i,function(e){if(Array.isArray(e))return s(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),selector:document.querySelector(n),activeClass:r,closeBtn:o})}},{key:"togglePopup",value:function(e){var t=this;if(this.popup<0)for(var i=function(i){t.popups[i].callerSelector.forEach((function(n,s){if(e.closest(n))return t.popups[i].selector.classList.add(t.popups[i].activeClass),void(t.popup=i)}))},n=0;n<this.popups.length;n++)i(n);else(e.closest(this.popups[this.popup].closeBtn)||e===this.popups[this.popup].selector)&&(this.popups[this.popup].selector.classList.remove(this.popups[this.popup].activeClass),this.popup=-1)}},{key:"run",value:function(){var e=this;document.addEventListener("click",(function(t){e.togglePopup(t.target)}))}}])&&r(t.prototype,i),e}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+d (ddd) ddd-dd-dd",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"7";l(this,e),this.elems=document.querySelectorAll(t),this.value="",this.mask=i,this.code=n}var t,i;return t=e,(i=[{key:"beginInput",value:function(e){0===e.value.length&&(e.value="+".concat(this.code," (")),this.value=e.value}},{key:"chekValue",value:function(e){(e=e.replace(/[^0-9]/g,"")).length>12&&(e=e.substr(0,11)),e[0]!==this.code&&(e=this.code+e);for(var t=this.mask,i=0;i<e.length;i++)t=t.replace("d",e[i]);return t.indexOf("d")>0&&(t=t.slice(0,t.indexOf("d"))),t.length>4&&(t=t.replace(/[^0-9]+$/,"")),t}},{key:"getValue",value:function(e){return e.length>this.value.length?(this.value=this.chekValue.call(this,e),this.value):e.length<4?(this.value="+".concat(this.code," ("),this.value):(this.value=e,this.value=this.chekValue.call(this,this.value),this.value)}},{key:"getMask",value:function(e){var t=e.value.length,i=e.selectionStart;e.value=this.getValue.call(this,e.value),t>i&&e.setSelectionRange(i,i)}},{key:"endInput",value:function(e){e.value.length<=4&&(e.value="")}},{key:"init",value:function(){var e=this;this.elems.forEach((function(t){t.addEventListener("focus",e.beginInput.bind(e,t)),t.addEventListener("input",e.getMask.bind(e,t)),t.addEventListener("blur",e.endInput.bind(e,t))}))}}])&&a(t.prototype,i),e}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const p=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"send-form-message-error";c(this,e),this.forms=document.querySelectorAll(t),this.errorClassName=i}var t,i;return t=e,(i=[{key:"getErorMesage",value:function(e){var t=document.createElement("div");return t.className=this.errorClassName,t.textContent=e,t}},{key:"validate",value:function(e){var t=this,i=e.querySelectorAll("input"),n=i.length;return i.forEach((function(e){if("checkbox"===e.getAttribute("type"))if(e.checked)n--;else{var i=t.getErorMesage.call(t,"Подтвердите согласие");e.insertAdjacentElement("afterend",i),setTimeout((function(){return i.remove()}),1e3)}if("name"===e.name)if(e.value.length>=2)n--;else{var s=t.getErorMesage.call(t,"Введите коректное значение");e.insertAdjacentElement("afterend",s),setTimeout((function(){return s.remove()}),1e3)}if("phone"===e.name)if(e.value.length>17)n--;else{var r=t.getErorMesage.call(t,"Введите коректное значение");e.insertAdjacentElement("afterend",r),setTimeout((function(){return r.remove()}),1e3)}})),0===n}},{key:"sendForm",value:function(e){if(event.preventDefault(),this.validate.call(this,e)&&e.querySelector('[type="checkbox"]').checked){var t=new FormData(e),i={};t.forEach((function(e,t){i[t]=e})),this.postData(i).then((function(e){if(200!==e.status)throw new Error("status network not 200")})).catch((function(e){console.error(e)})).finally(e.querySelectorAll("input").forEach((function(e){return e.value=""})))}}},{key:"postData",value:function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"init",value:function(){var e=this;this.forms.forEach((function(t){t.querySelectorAll("input").forEach((function(e){return e.removeAttribute("required")})),t.addEventListener("submit",e.sendForm.bind(e,t))}))}}])&&h(t.prototype,i),e}();function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const v=function(){function e(t,i,n,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elems=document.querySelectorAll(t),this.activeClass=i,this.popupClass=n,this.popups=[],this.popupRevers=s}var t,i;return t=e,(i=[{key:"showHint",value:function(e,t){e.classList.add(this.activeClass),this.popups[t].getBoundingClientRect().y<0?this.popups[t].classList.add(this.popupRevers):this.popups[t].classList.remove(this.popupRevers)}},{key:"hideHint",value:function(e,t){e.classList.remove(this.activeClass),this.popups[t].classList.remove(this.popupRevers)}},{key:"init",value:function(){var e=this;this.elems.forEach((function(t,i){e.popups.push(t.querySelector(e.popupClass)),t.addEventListener("mouseover",e.showHint.bind(e,t,i)),t.addEventListener("mouseout",e.hideHint.bind(e,t,i))}))}}])&&d(t.prototype,i),e}();function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const m=function(){function e(t){var i=this,n=t.wraper,s=t.slider,r=t.slide,o=t.prev,l=t.next,a=t.slideNum,u=t.slideCount,c=t.isDisabled,h=t.slideShow,p=t.breakPoints,d=t.callBack;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wraper=document.querySelector(n),this.slider=this.wraper.querySelector(s),this.slide=this.slider.querySelectorAll(r),this.prev=o,this.prevBtn=document.querySelector(o),this.next=l,this.nextBtn=document.querySelector(l),this.sliderWidth=0,this.sliderHeight=0,this.position=0,this.slideNum=this.wraper.parentNode.querySelector(a),this.slideCount=this.wraper.parentNode.querySelector(u),this.isDisabled=!!c,this.slideShow=h||1,this.breakPoints=p,p&&(this.breakPointsKeys=Object.keys(p),this.breakPointsKeys.forEach((function(e,t){return i.breakPointsKeys[t]=+e})),this.breakPointsKeys.sort((function(e,t){return e-t}))),this.listener=function(e){var t=e.target;t.closest(i.prev)&&i.prevSlide.call(i),t.closest(i.next)&&i.nextSlide.call(i)},this.resListener=this.recalculate.bind(this),this.callBack=d||null}var t,i;return t=e,(i=[{key:"getPosition",value:function(){return this.position}},{key:"setPosition",value:function(e){this.position=e,this.moveSlider.call(this)}},{key:"hideSlider",value:function(){this.slider.style.display="none"}},{key:"showSlider",value:function(){this.slider.style.display="flex"}},{key:"updateSlider",value:function(){var e=this;this.wraper.style.overflow="hidden",this.slider.style.justifyContent="space-around",this.sliderWidth=this.wraper.offsetWidth,this.slider.style.width=this.sliderWidth/this.slideShow*this.slide.length+"px",this.slider.style.maxWidth=this.sliderWidth/this.slideShow*this.slide.length+"px",this.slide.forEach((function(t){return t.style.width=e.sliderWidth/e.slideShow+"px"})),this.position=0,this.moveSlider()}},{key:"moveSlider",value:function(){this.isDisabled||(this.slider.style.transform="translateX(-".concat(this.position*this.sliderWidth/this.slideShow,"px)"),0===this.position?this.prevBtn.classList.add("unvisible"):this.prevBtn.classList.remove("unvisible"),this.position===this.slide.length-this.slideShow?this.nextBtn.classList.add("unvisible"):this.nextBtn.classList.remove("unvisible"),this.slideNum&&(this.slideNum.textContent=+this.position+1),this.slideCount&&(this.slideCount.textContent=this.slide.length)),this.callBack&&this.callBack(this.position)}},{key:"enableSlider",value:function(){this.isDisabled=!1,this.updateSlider(),this.moveSlider(),this.addListeners()}},{key:"disableSlider",value:function(){this.isDisabled=!0,this.removeListeners()}},{key:"prevSlide",value:function(){this.position>0&&(this.position--,this.moveSlider.call(this))}},{key:"nextSlide",value:function(){this.position<this.slide.length-this.slideShow&&(this.position++,this.moveSlider.call(this))}},{key:"addListeners",value:function(){this.isDisabled||this.wraper.parentNode.addEventListener("click",this.listener)}},{key:"removeListeners",value:function(){this.wraper.parentNode.removeEventListener("click",this.listener)}},{key:"init",value:function(){this.recalculate(),this.addListeners(),this.resizeListener()}},{key:"recalculate",value:function(){var e=this;this.breakPointsKeys&&this.breakPointsKeys.forEach((function(t){if(document.documentElement.clientWidth>t)for(var i in e.breakPoints[t]){e[i]=e.breakPoints[t][i];break}})),this.updateSlider()}},{key:"resizeListener",value:function(){window.addEventListener("resize",this.resListener)}},{key:"removeRsizeListener",value:function(){window.removeEventListener("resize",this.resListener)}},{key:"clearStyles",value:function(){this.wraper.style.overflow="",this.slider.style.justifyContent="",this.slider.style.width="",this.slider.style.maxWidth="",this.slide.forEach((function(e){return e.style.width=""}))}},{key:"deleteSlider",value:function(){this.removeListeners.call(this),this.removeRsizeListener.call(this),this.clearStyles.call(this)}}])&&f(t.prototype,i),e}();function y(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const b=function(){function e(t){var i=t.wraper,n=t.tabsBtn,s=t.tabsBtnActivClass,r=t.tabs;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wraper=document.querySelector(i),this.tabsBtnSelector=n,this.tabsBtn=document.querySelectorAll(n),this.tabsBtnActivClass=s,this.tabs=r,this.position=0}var t,i;return t=e,(i=[{key:"getTab",value:function(e){for(var t=0;t<this.tabsBtn.length;t++)this.tabsBtn[t].classList.remove(this.tabsBtnActivClass),this.tabs&&this.tabs[t].disableSlider(),this.tabs&&this.tabs[t].hideSlider(),e===this.tabsBtn[t]&&(this.position=t,this.tabsBtn[t].classList.add(this.tabsBtnActivClass),this.tabs&&this.tabs[t].enableSlider(),this.tabs&&this.tabs[t].showSlider())}},{key:"getActiveTab",value:function(e){this.getTab(this.tabsBtn[e])}},{key:"init",value:function(){var e=this;this.wraper.addEventListener("click",(function(t){var i=t.target.closest(e.tabsBtnSelector);i&&e.getTab.call(e,i)}))}}])&&y(t.prototype,i),e}();new t(".header-contacts__phone-number-accord",".header-contacts__arrow").run(),new n(".popup-dialog-menu",".menu__icon",".close-menu").run(),document.addEventListener("click",(function(e){var t=e.target.closest(".button-footer")||e.target.closest(".popup-menu-nav a");if(t&&!t.closest(".popup-servises")){e.preventDefault();var i=t.getAttribute("href"),n=i?document.getElementById(i.substring(1)).getBoundingClientRect().top:0;window.scrollTo({top:n,behavior:"smooth"})}})),new u('input[name="phone"]').init(),new p("form").init(),new v(".formula-item","active-item",".formula-item-popup","formula-item-popup_reverse").init();var w=new b({wraper:".nav-list-repair",tabsBtn:".repair-types-nav__item",tabsBtnActivClass:"active",tabs:function(){for(var e=[],t=1;t<=5;t++){var i=new m({wraper:".repair-types-slider",slider:".types-repair".concat(t),slide:".types-repair".concat(t," .repair-types-slider__slide"),prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total",isDisabled:1!==t||""});i.init(),e.push(i)}return e}()});w.init();var g=null,k=null,S=(document.querySelector(".nav-list-repair"),document.querySelectorAll(".repair-types-nav__item"),new b({wraper:".popup-dialog-portfolio",tabsBtn:".popup-portfolio-text",tabsBtnActivClass:"popup-portfolio-text-active"}));S.init();var _=new m({wraper:".popup-portfolio-slider-wraper",slider:".popup-portfolio-slider",slide:".popup-portfolio-slider__slide",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total",callBack:S.getActiveTab.bind(S)});_.init();var E=function(){(g=new m({wraper:".repair-types-nav",slider:".nav-list-repair",slide:".repair-types-nav__item",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",callBack:w.getActiveTab.bind(w)})).init(),(k=new m({wraper:".formula-slider-wrap",slider:".formula-slider",slide:".formula-slider__slide",prev:"#formula-arrow_left",next:"#formula-arrow_right",slideShow:3})).init()},L=function(){new m({wraper:".portfolio-slider-wraper-mobile",slider:".portfolio-slider-mobile",slide:".portfolio-slider__slide-frame",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",slideNum:".slider-counter-content__current",slideCount:".slider-counter-content__total"}).init()};document.documentElement.clientWidth<=1024&&E(),document.documentElement.clientWidth<=575&&L(),window.matchMedia("(max-width: 1024px)").addEventListener("change",(function(e){e.matches?E():(g.deleteSlider.call(g),g=null,k.deleteSlider.call(k),k=null)}));var C=null,B=function(){(C=new m({wraper:".portfolio-slider-wraper",slider:".portfolio-slider",slide:".portfolio-slider__slide",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",slideShow:3,breakPoints:{1140:{slideShow:3},900:{slideShow:2},575:{slideShow:1}},callBack:function(){C.wraper.addEventListener("click",(function(e){var t=e.target.closest(".portfolio-slider__slide-frame");t&&_.setPosition.call(_,t.dataset.position)}))}})).init()};document.documentElement.clientWidth>575&&B(),window.matchMedia("(max-width: 1024px)").addEventListener("change",(function(e){e.matches?(C=null,L()):B()}));var x=new o;x.addPopup({callerSelector:[".popup-servises"],selector:".popup-repair-types",activeClass:"popup-active",closeBtn:".close"}),x.addPopup({callerSelector:[".link-privacy"],selector:".popup-privacy",activeClass:"popup-active",closeBtn:".close"}),x.addPopup({callerSelector:[".portfolio-slider__slide-frame"],selector:".popup-portfolio",activeClass:"popup-active",closeBtn:".close"}),x.run()})();