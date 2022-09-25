import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

initPage();

const onFormInput = evt => {
  const { name, value } = evt.target;

  let saveData = load(STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;

  save(STORAGE_KEY, saveData);
};

formEl.addEventListener('input', throttle(onFormInput, 500));

function initPage() {
  const saveData = load(STORAGE_KEY);

  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

const handleSubmit = evt => {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  remove(STORAGE_KEY);
};

formEl.addEventListener('submit', handleSubmit);