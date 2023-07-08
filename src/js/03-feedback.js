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
selectors.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  if (e.target.name === 'email') {
    formData.email = e.target.value;
  } else if (e.target.name === 'message') {
    formData.message = e.target.value;
  }
  saveDataToLS(FEEDBACK_FORM_STATE, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(getDataFromLS(FEEDBACK_FORM_STATE));
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  selectors.form.reset();
}

function onLoad() {
  const state = getDataFromLS(FEEDBACK_FORM_STATE);
  selectors.input.value = state?.email || '';
  selectors.textarea.value = state?.message || '';
}
onLoad();

function saveDataToLS(key, value) {
  try {
    const dataToString = JSON.stringify(value);
    localStorage.setItem(key, dataToString);
  } catch (error) {
    onLocalStorageError(error);
  }
}

function getDataFromLS(key) {
  try {
    const dataFromString = localStorage.getItem(key);
    return JSON.parse(dataFromString ?? '{}');
  } catch (error) {
    onLocalStorageError(error);
  }
}

function onLocalStorageError(error) {
  console.error(
    '✅ This is fine, we handled Local Storage error:',
    error.message
  );
}
