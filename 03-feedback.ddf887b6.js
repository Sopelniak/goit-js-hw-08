var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,u=f||i||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,r,a,f,i,u,c=0,d=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,f=e.apply(a,n)}function S(e){return c=e,i=setTimeout(O,t),d?y(e):f}function k(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=a}function O(){var e=m();if(k(e))return j(e);i=setTimeout(O,function(e){var n=t-(e-u);return g?s(n,a-(e-c)):n}(e))}function j(e){return i=void 0,p&&o?y(e):(o=r=void 0,f)}function h(){var e=m(),n=k(e);if(o=arguments,r=this,u=e,n){if(void 0===i)return S(u);if(g)return i=setTimeout(O,t),y(u)}return void 0===i&&(i=setTimeout(O,t)),f}return t=b(t)||0,v(n)&&(d=!!n.leading,a=(g="maxWait"in n)?l(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==i&&clearTimeout(i),c=0,o=u=r=i=void 0},h.flush=function(){return void 0===i?f:j(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var i=o.test(e);return i||r.test(e)?a(e.slice(2),i?2:8):n.test(e)?NaN:+e}const g=document.querySelector(".feedback-form"),p=document.querySelector(".feedback-form input"),y=document.querySelector(".feedback-form textarea"),S=document.querySelector(".feedback-form button");g.addEventListener("input",(function(e){const{elements:{email:t,message:n}}=e.currentTarget,o={};o[t.name]=t.value,o[n.name]=n.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),S.addEventListener("click",(function(e){if(e.preventDefault(),null===localStorage.getItem("feedback-form-state"))return alert("Вам потрібно ввести повідомлення!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),p.value="",y.value=""})),function(){try{if(null===localStorage.getItem("feedback-form-state"))return;p.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,y.value=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch(e){console.log(e)}}();
//# sourceMappingURL=03-feedback.ddf887b6.js.map