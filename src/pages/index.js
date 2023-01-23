import {
  initialCards,
  popupEditProfileSelector,
  popupAddCardSelector,
  buttonEditPopupProfile,
  buttonAddPopupProfile,
  popupOpenCard,
  nameInput,
  jobInput,
  profileNameSelector,
  profileAboutSelector,
  cardListSection
} from '../components/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Создать карточки и добавить их в верстку

const cardsList = new Section({
  items: initialCards,
  renderer: rendererCard,
},
  cardListSection
);
cardsList.renderItems();

// Открытие попапа с изоображением

const popupShowImage = new PopupWithImage(popupOpenCard);
popupShowImage.setEventListeners();

function handleCardClick(name, link) {
  popupShowImage.open({
    name,
    link
  });
}

// Создать карточку

function rendererCard(item) {
  const card = new Card(item, '#element-template', handleCardClick);
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

// Информация о пользователе

const userInfo = new UserInfo({ userNameSelector: profileNameSelector, userAboutSelector: profileAboutSelector})

// Попап редактирования профиля  - создание

const popupNewEditProfile = new PopupWithForm(popupEditProfileSelector, (values) => {
  userInfo.setUserInfo({
    name: values.userName,
    info: values.userAbout
  });
});
popupNewEditProfile.setEventListeners();

// Попап создания карточки - создание

const popupNewCreateCard = new PopupWithForm(popupAddCardSelector, rendererCard);
popupNewCreateCard.setEventListeners();

// Открытие попапа редактирования профиля

buttonEditPopupProfile.addEventListener('click', function () {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  popupNewEditProfile.open();
});

// Открытие попапа добавления карточки

buttonAddPopupProfile.addEventListener('click', function () {
  popupNewCreateCard.open();
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
