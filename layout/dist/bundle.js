(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.block=document.querySelector(e),this.button=document.querySelector(n)}var n,o;return n=t,(o=[{key:"toggle",value:function(){this.block.classList.toggle("header-contacts__phone-number-accord_active"),this.button.classList.toggle("header-contacts__arrow_active")}},{key:"run",value:function(){this.button.addEventListener("click",this.toggle.bind(this))}}])&&e(n.prototype,o),t}())(".header-contacts__phone-number-accord",".header-contacts__arrow").run()})();