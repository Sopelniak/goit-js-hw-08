!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,b=function(){return d.Date.now()};function g(e,t,n){var r,a,u,f,i,c,l=0,d=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=a;return r=a=void 0,l=t,f=e.apply(o,n)}function k(e){return l=e,i=setTimeout(j,t),d?S(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function j(){var e=b();if(O(e))return h(e);i=setTimeout(j,function(e){var n=t-(e-c);return s?v(n,u-(e-l)):n}(e))}function h(e){return i=void 0,g&&r?S(e):(r=a=void 0,f)}function T(){var e=b(),n=O(e);if(r=arguments,a=this,c=e,n){if(void 0===i)return k(c);if(s)return i=setTimeout(j,t),S(c)}return void 0===i&&(i=setTimeout(j,t)),f}return t=y(t)||0,p(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(y(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==i&&clearTimeout(i),l=0,r=c=a=i=void 0},T.flush=function(){return void 0===i?f:h(b())},T}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||f.test(e)?i(e.slice(2),c?2:8):a.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),k=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea"),j=document.querySelector(".feedback-form button");S.addEventListener("input",(function(e){var t=e.currentTarget.elements,n=t.email,o=t.message,r={};r[n.name]=n.value,r[o.name]=o.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))})),j.addEventListener("click",(function(e){if(e.preventDefault(),null===localStorage.getItem("feedback-form-state"))return alert("Вам потрібно ввести повідомлення!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),k.value="",O.value=""})),function(){try{if(null===localStorage.getItem("feedback-form-state"))return;k.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,O.value=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch(e){console.log(e)}}()}();
//# sourceMappingURL=03-feedback.30d6e116.js.map
