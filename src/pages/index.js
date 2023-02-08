import {
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
  validationConfig,
  popupCheckSelector,
  popupEditAvatarSelector,
  buttonEditAvatar,
  profileAvatarSelector
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

//Api

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'cd4002bc-1a30-4cb4-9d99-0b84c55f25d2',
    'Content-Type': 'application/json'
  }
});

const cardsSection = new Section({
  renderer: renderCard
},
  cardListSection
);

// Создать карточки и добавить их в верстку и информация о пользователе

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(data => {
    userInfo.setUserInfo(data[1]);
    userInfo.setUserAvatar(data[1].avatar);
    data[0].reverse();
    cardsSection.renderItems(data[0]);
  })
  .catch((err) => {
    console.log(err);
  });

// Открытие попапа с изоображением

const popupShowImage = new PopupWithImage(popupOpenCard);
popupShowImage.setEventListeners();

// Создать карточку

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupShowImage.open(data);
    },
    handleLikeClick: (id, isMyLike) => {
      if (isMyLike) {
        api.deleteLike(id)
          .then(data => card.updateLikes(data.likes))
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.like(id)
          .then(data => card.updateLikes(data.likes))
          .catch((err) => {
            console.log(err);
          });
      }
    },
    handleDeleteIconClick: (id) => {
      popupConfirm.setSubmitCallback(() => {
        api.deleteCard(id)
          .then(() => {
            card.remove()
            popupConfirm.close()
          })
          .catch((err) => {
            console.log(err);
          });
      })
      popupConfirm.open();
    }
  },
    '#element-template',
    userInfo.getId()
  );
  return card.generateCard();
}

// Добавить карточку в верстку

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsSection.addItem(cardElement);
}

// Информация о пользователе

const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  userAboutSelector: profileAboutSelector,
  userAvatarSelector: profileAvatarSelector
})

// Попап редактирования профиля - создание

const popupNewEditProfile = new PopupWithForm(popupEditProfileSelector, (values) => {
  popupNewEditProfile.setButtonText('Сохранение...');
  api.setUserInfoPopap(values)
    .then(data => {
      userInfo.setUserInfo(data);
      popupNewEditProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupNewEditProfile.setButtonText('Сохранить'));
});
popupNewEditProfile.setEventListeners();

// Попап редактирования аватара

const popupEditProfileAvatar = new PopupWithForm(popupEditAvatarSelector, (inputValue) => {
  popupEditProfileAvatar.setButtonText('Сохранение...');
  api.changeUserAvatar(inputValue)
    .then(data => {
      userInfo.setUserAvatar(data.avatar);
      popupEditProfileAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupEditProfileAvatar.setButtonText('Сохранить'));
})

// Открытие попапа редактирования аватара

buttonEditAvatar.addEventListener('click', function () {
  popupEditProfileAvatar.open();
});
popupEditProfileAvatar.setEventListeners();

// Попап создания карточки - создание

const popupNewCreateCard = new PopupWithForm(popupAddCardSelector, (inputValues) => {
  popupNewCreateCard.setButtonText('Сохранение...');
  api.addNewCard(inputValues)
    .then(data => {
      renderCard(data);
      popupNewCreateCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupNewCreateCard.setButtonText('Создать'));
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

// Попап проверки

const popupConfirm = new PopupWithConfirmation(popupCheckSelector)
popupConfirm.setEventListeners();