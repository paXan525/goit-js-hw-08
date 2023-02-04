import throttle from 'lodash.throttle';


const STORAGE_EMAIL = 'feedback-email';
const STORAGE_MESSAGE = 'feedback-message';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
emailEl.addEventListener('input', throttle(onEmailInput, 500));
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

populateInput();

function onFormSubmit(event) {
    event.preventDefault();

    console.log({ 'email': emailEl.value, 'message': textareaEl.value}  );

    event.target.reset();

    localStorage.removeItem(STORAGE_EMAIL);
    localStorage.removeItem(STORAGE_MESSAGE);
};

function onEmailInput(event) {
    const email = event.target.value;

    localStorage.setItem(STORAGE_EMAIL, email);
}

function onTextareaInput(event) {
    const message = event.target.value;

    localStorage.setItem(STORAGE_MESSAGE, message);
};

function populateInput() {
    const savedEmail = localStorage.getItem(STORAGE_EMAIL);
    const savedTextarea = localStorage.getItem(STORAGE_MESSAGE);

    if (savedEmail || savedTextarea) {
        emailEl.value = savedEmail;
        textareaEl.value = savedTextarea;
    };
};
