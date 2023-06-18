import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const feedbackFormStateKey = 'feedback-form-state';
const saveFormStateToLocalStorage = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
};
const fillFormFromLocalStorage = () => {
  const storedState = localStorage.getItem(feedbackFormStateKey);
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const clearLocalStorageAndForm = () => {
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageInput.value = '';
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  console.log(formState);
  clearLocalStorageAndForm();
};

feedbackForm.addEventListener('input', throttle(saveFormStateToLocalStorage, 500));

fillFormFromLocalStorage();
feedbackForm.addEventListener('submit', handleSubmit);