!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form input"),a=document.querySelector(".feedback-form textarea"),r=document.querySelector(".feedback-form button");e.addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,r=t.message,o={};o[a.name]=a.value,o[r.name]=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),r.addEventListener("click",(function(r){if(r.preventDefault(),""===t.value&&""===a.value)return alert("Вам потрібно ввести повідомлення!");console.log("email: ".concat(t.value,"; message: ").concat(a.value,";")),localStorage.removeItem("feedback-form-state"),e.reset()})),function(){try{var e=localStorage.getItem("feedback-form-state"),r=JSON.parse(e);if(null===e)return;t.value=r.email,a.value=r.message}catch(e){console.log(e)}}()}();
//# sourceMappingURL=03-feedback.6abbf36e.js.map
