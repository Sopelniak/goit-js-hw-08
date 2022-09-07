import throttle from 'lodash.throttle';

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

function scanLocalStorage() {
  try {
    if (localStorage.getItem('feedback-form-state') !== null) {
      emailEl.value = JSON.parse(
        localStorage.getItem('feedback-form-state')
      ).email;
      messageEl.value = JSON.parse(
        localStorage.getItem('feedback-form-state')
      ).message;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
scanLocalStorage();

function onBtnSubmit(event) {
  event.preventDefault();

  if (localStorage.getItem('feedback-form-state') !== null) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    emailEl.value = '';
    messageEl.value = '';
  } else {
    return alert('Вам потрібно ввести повідомлення!');
  }
}
