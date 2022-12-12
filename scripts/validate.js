const showInputError = (input, rest) => {
  const errorElement = document.querySelector(`.${input.id}-error`);

  input.classList.add(rest.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(rest.errorClass);
};

const hideInputError = (input, rest) => {
  const errorElement = document.querySelector(`.${input.id}-error`);

  input.classList.remove(rest.inputErrorClass);
  errorElement.classList.remove(rest.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (input, rest) => {
  if (!input.validity.valid) {
    showInputError(input, rest);
  } else {
    hideInputError(input, rest);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (buttonElement, state, rest) => {
  if (state) {
    buttonElement.classList.remove(rest.inactiveButtonClass);
  } else {
    buttonElement.classList.add(rest.inactiveButtonClass);
  }
};

const setEventListeners = (form, rest) => {
  const inputs = Array.from(form.querySelectorAll(rest.inputSelector));
  const buttonElement = form.querySelector(rest.submitButtonSelector);

  toggleButtonState(buttonElement, !hasInvalidInput(inputs), rest);
  inputs.forEach(input => {
    input.addEventListener('input', evt => {
      checkInputValidity(input, rest);
      toggleButtonState(buttonElement, !hasInvalidInput(inputs), rest);
    })
  });
  form.addEventListener('reset', () => {
    toggleButtonState(buttonElement, false, rest);
    inputs.forEach(input => {
      hideInputError(input, rest);
    });
  });
}

function enableValidation ({formSelector, ...rest}) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach(form => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form, rest);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});