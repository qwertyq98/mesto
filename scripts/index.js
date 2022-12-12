import {initialCards} from './constants.js';

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const editButtonElement = document.querySelector('.profile__button-edit');
const addButtonElement = document.querySelector('.profile__button-add');
const popupCloseButtonElements = document.querySelectorAll('.popup__button_close');
const cardNameInput = popupAddCard.querySelector('.popup__input_type_name');
const cardLinkInput = popupAddCard.querySelector('.popup__input_type_url');
const popupOpenCard = document.querySelector('.popup_type_open');
const popups = document.querySelectorAll('.popup');

// Находим форму в DOM
const formElementProfile = popupEditProfile.querySelector('.popup__form_name_profile');// Воспользуйтесь методом querySelector()
const formElementCard = popupAddCard.querySelector('.popup__form_name_card');

// Находим поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElementProfile.querySelector('.popup__input_type_info');// Воспользуйтесь инструментом .querySelector()

// Выберите элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const cardsContainer = document.querySelector('.content__elements');

// Попапы открытие/закрытие
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

// Лайк
const toggleLike = (element) => {
  element.classList.toggle('element__like_active');
}

// Создать карточки

const createCard = item => {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  const likeElement = cardElement.querySelector('.element__like');
  const trashElement = cardElement.querySelector('.element__trash');

  imageElement.src = item.link;
  imageElement.alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;

  likeElement.addEventListener('click', function () {
    toggleLike(likeElement);
  });
  trashElement.addEventListener('click', function () {
    trashElement.closest('.element').remove();
  });
  imageElement.addEventListener('click', function () {
    const popupImage = popupOpenCard.querySelector('.popup__image');
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupOpenCard.querySelector('.popup__title').textContent = item.name;
    openPopup(popupOpenCard);
  });

  return cardElement;
}

// Добавить карточки

const renderCard = (item, container) => {
  const cardElement = createCard(item);
  container.prepend(cardElement);
};

initialCards.forEach(function (item) {
  renderCard(item, cardsContainer);
});

// Открытие попапа редактирования профиля

editButtonElement.addEventListener('click', function () {
  formElementProfile.reset();
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
  openPopup(popupEditProfile);
});

// Открытие попапа добавления карточки

addButtonElement.addEventListener('click', function () {
  openPopup(popupAddCard);
  formElementCard.reset();
});

// Закрытие любого попапа

popupCloseButtonElements.forEach(function (item) {
  item.addEventListener('click',function (evt) {
    closePopup(evt.target.closest('.popup'));
  });
});

//Добавление какточки через форму

function addFormCardSubmitHandler (evt) {
  evt.preventDefault();

  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  renderCard(newCard, cardsContainer);
  formElementCard.reset();
}
formElementCard.addEventListener('submit', function (evt) {
  addFormCardSubmitHandler(evt);
  closePopup(popupAddCard);
});

// Обработчик «отправки» формы
function sendFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

// Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const aboutValue = jobInput.value;

  profileNameElement.textContent = nameValue;
  profileAboutElement.textContent = aboutValue;
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener('submit', function (evt) {
  sendFormSubmitHandler(evt);
  closePopup(popupEditProfile);
});

//Закрытие попапа по кликом на оверлей
function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

popups.forEach(function (popup) {
  popup.addEventListener('click', closePopupByOverlay);
});

//Закрытие попапа через ESC

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}