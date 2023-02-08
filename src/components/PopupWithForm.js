import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this.popup.querySelector('form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector('.popup__button');
  }

  _getInputValues() {
    const formValuesInputs = {};
    this._inputList.forEach(input => {
      formValuesInputs[input.name] = input.value;
    })
    return formValuesInputs;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    })
  }

  setButtonText(text) {
    this._button.textContent = text;
  }
}
