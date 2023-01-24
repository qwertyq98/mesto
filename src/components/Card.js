export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.name;
    this._src = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._trashElement = this._element.querySelector('.element__trash');
    this._likeElement = this._element.querySelector('.element__like');
    this._imageElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__title');

    this._imageElement.src = this._src;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _toggleLike() {
    this._likeElement.classList.toggle('element__like_active');
  }

  _handleDeleteElement() {
    this._element.remove();
    this._element = null;
  }

  _handleClickImage() {
    this._handleCardClick(this._title, this._src);
  }

  _setEventListeners() {
    this._likeElement.addEventListener('click', this._toggleLike.bind(this));

    this._trashElement.addEventListener('click', this._handleDeleteElement.bind(this));

    this._imageElement.addEventListener('click', this._handleClickImage.bind(this));
  }
}
