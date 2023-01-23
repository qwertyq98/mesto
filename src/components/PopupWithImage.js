import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupImage = this.popup.querySelector('.popup__image');
    this.popupTitle = this.popup.querySelector('.popup__title');
  }

  open(card) {
    super.open();
    this.popupImage.src = card.link;
    this.popupImage.alt = card.name;
    this.popupTitle.textContent = card.name;
  }
}