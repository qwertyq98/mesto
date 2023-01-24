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
  cardListSection,
  validationConfig
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

// Создать карточки и добавить их в верстку

const cardsSection = new Section({
  items: initialCards,
  renderer: renderCard,
},
  cardListSection
);
cardsSection.renderItems();

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

function createCard(cardData) {
  const card = new Card(cardData, '#element-template', handleCardClick);
  return card.generateCard();
  // cardsSection.addItem(cardElement);
}

// Добавить карточку в верстку

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsSection.addItem(cardElement);
}

// Информация о пользователе

const userInfo = new UserInfo({ userNameSelector: profileNameSelector, userAboutSelector: profileAboutSelector})

// Попап редактирования профиля - создание

const popupNewEditProfile = new PopupWithForm(popupEditProfileSelector, (values) => {
  userInfo.setUserInfo({
    name: values.userName,
    info: values.userAbout
  });
  popupNewEditProfile.close();
});
popupNewEditProfile.setEventListeners();

// Попап создания карточки - создание

const popupNewCreateCard = new PopupWithForm(popupAddCardSelector, (inputValues) => {
  renderCard(inputValues);
  popupNewCreateCard.close();
});
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
  const formValidator = new FormValidator(form, validationConfig);
  formValidator.enableValidation();
});
