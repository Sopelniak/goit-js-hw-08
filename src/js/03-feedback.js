// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const btnSubmitEl = document.querySelector('.feedback-form button');

formEl.addEventListener('input', onInput);
btnSubmitEl.addEventListener('click', onBtnSubmit);

function onInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const feedback = {};
  feedback[email.name] = email.value;
  feedback[message.name] = message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function onBtnSubmit(event) {
  event.preventDefault();

  if (emailEl.value !== '' || messageEl.value !== '') {
    console.log(`email: ${emailEl.value}; message: ${messageEl.value};`);
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
  } else {
    return alert('Вам потрібно ввести повідомлення!');
  }
}

function scanLocalStorage() {
  try {
    const dataLS = localStorage.getItem('feedback-form-state');
    const dataLSParse = JSON.parse(dataLS);
    if (dataLS !== null) {
      emailEl.value = dataLSParse.email;
      messageEl.value = dataLSParse.message;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
scanLocalStorage();
