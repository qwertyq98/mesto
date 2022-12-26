export default class FormValidator {
  constructor(form, selectors) {
    this._form = form;
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;

    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation () {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  _setEventListeners() {
    this._toggleButtonState(!this._hasInvalidInput(this._inputs));
    this._inputs.forEach(input => {
      input.addEventListener('input', evt => {
        this._checkInputValidity(input);
        this._toggleButtonState(!this._hasInvalidInput(this._inputs));
      })
    });
    this._form.addEventListener('reset', () => {
      this._toggleButtonState(false);
      this._inputs.forEach(input => {
        this._hideInputError(input);
      });
    });
  }

  _toggleButtonState(state) {
    if (state) {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
  };

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  };

  _showInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);

    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);

    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };
}

