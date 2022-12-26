import {
  initialCards,
  popupEditProfile,
  popupAddCard,
  buttonEditPopupProfile,
  buttonAddPopupProfile,
  popupCloseButtonElements,
  cardNameInput,
  cardLinkInput,
  popupOpenCard,
  popups,
  popupImage,
  popupTitle,
  formElementProfile,
  formElementCard,
  nameInput,
  jobInput,
  profileNameElement,
  profileAboutElement,
  cardsContainer
} from './constants.js';
import Card from './Card.js'
import FormValidator from './FormValidator.js';

// Попапы открытие/закрытие
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}
// Закрытие любого попапа

popupCloseButtonElements.forEach(function (item) {
  item.addEventListener('click',function (evt) {
    closePopup(evt.target.closest('.popup'));
  });
});

//Закрытие попапа через ESC

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Добавление карточки через форму

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

//Закрытие попапа по кликом на оверлей

function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

popups.forEach(function (popup) {
  popup.addEventListener('click', closePopupByOverlay);
});

// Открытие попапа редактирования профиля

buttonEditPopupProfile.addEventListener('click', function () {
  formElementProfile.reset();
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
  openPopup(popupEditProfile);
});

// Открытие попапа добавления карточки

buttonAddPopupProfile.addEventListener('click', function () {
  openPopup(popupAddCard);
  formElementCard.reset();
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

formElementProfile.addEventListener('submit', function (evt) {
  sendFormSubmitHandler(evt);
  closePopup(popupEditProfile);
});

// Добавить карточки

const renderCard = (item, container) => {
  const card = new Card(item, '#element-template', function(name, src) {
    popupImage.src = src;
    popupImage.alt = name;
    popupTitle.textContent = name;

    openPopup(popupOpenCard);
  });
  const cardElement = card.generateCard();

  container.prepend(cardElement);
};

initialCards.forEach(function (item) {
  renderCard(item, cardsContainer);
});

// Валидация форм

document.querySelectorAll('form').forEach(form => {
  const formValidator = new FormValidator(form, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
  formValidator.enableValidation();
});
