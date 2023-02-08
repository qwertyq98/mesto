export default class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteIconClick}, templateSelector, userId) {
    this._title = data.name;
    this._src = data.link;
    this._id = data._id; //изоображение
    this._ownerId = data.owner._id; //создатель картинки
    this._likes = data.likes;
    this._userId = userId;
    this._isMyLike = this._likes.find(user => this._userId === user._id);

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._trashElement = this._element.querySelector('.element__trash');
    this._likeElement = this._element.querySelector('.element__like');
    this._imageElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__title');
    this._likeValueElement = this._element.querySelector('.element__like_value');

    if (this._ownerId !== this._userId) {
      this._trashElement.remove();
    }

    if (this._isMyLike) {
      this.toggleLike();
    }

    this._imageElement.src = this._src;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;
    this._likeValueElement.textContent = this._likes.length;

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

  toggleLike() {
    this._likeElement.classList.toggle('element__like_active');
  }

  updateLikes(likes) {
    const isMyLike = likes.find(user => this._userId === user._id);

    if (isMyLike !== this._isMyLike) {
      this.toggleLike();
      this._isMyLike = isMyLike;
    }
    this._likes = likes;
    this._likeValueElement.textContent = this._likes.length;
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeElement.addEventListener('click', () => this._handleLikeClick(this._id, this._isMyLike));
    this._trashElement.addEventListener('click', () => this._handleDeleteIconClick(this._id));
    this._imageElement.addEventListener('click', () => this._handleCardClick());
  }
}
