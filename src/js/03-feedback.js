
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const submitButton = feedbackForm.querySelector('button[type="submit"]');

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

  const isEmailEmpty = emailInput.value.trim() === '';
  const isMessageEmpty = messageInput.value.trim() === '';

  if (isEmailEmpty || isMessageEmpty) {
    showAlert();
  } else {
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    console.log(formState);
  }
};

const showAlert = () => {
  alert('Будь ласка, заповни всі поля перед продовженням.');
};

feedbackForm.addEventListener('input', throttle(saveFormStateToLocalStorage, 500));

fillFormFromLocalStorage();

submitButton.addEventListener('click', handleSubmit);