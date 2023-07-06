// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const selectors = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};
const FEEDBACK_FORM_STATE = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

selectors.form.addEventListener('submit', onFormSubmit);
selectors.input.addEventListener('input', throttle(onEmailInput, 500));
selectors.textarea.addEventListener('input', throttle(onMessageInput, 500));

function onEmailInput(e) {
  formData.email = e.target.value;
  saveDataToLS(FEEDBACK_FORM_STATE, formData);
}

function onMessageInput(e) {
  formData.message = e.target.value;
  saveDataToLS(FEEDBACK_FORM_STATE, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(getDataFromLS(FEEDBACK_FORM_STATE));
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  selectors.form.reset();
}

function saveDataToLS(key, value) {
  try {
    const dataToString = JSON.stringify(value);
    localStorage.setItem(key, dataToString);
  } catch (error) {
    console.error(
      '✅ This is fine, we handled parse error in try...catch', error.message
    );
  }
}

window.onload = function () {
  let state = getDataFromLS(FEEDBACK_FORM_STATE);
  if (state) {
    selectors.input.value = state.email || '';
    selectors.textarea.value = state.message || '';
  }
};

function getDataFromLS(key) {
  try {
    const dataFromString = localStorage.getItem(key);
    return JSON.parse(dataFromString ?? '{}');
  } catch (error) {
    console.error(
      '✅ This is fine, we handled parse error in try...catch', error.message
    );
  }
}
