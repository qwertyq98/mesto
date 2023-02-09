import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this.popup.querySelector('form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector('.popup__button');
    this._buttonText = this._button.textContent;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      if(input.name in data) {
        input.value = data[input.name];
      }
    });
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

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if(isLoading) {
      this._button.textContent = loadingText;
    } else {
      this._button.textContent = this._buttonText;
    }
  }
}
