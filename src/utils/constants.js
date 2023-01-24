const initialCards = [
  {
    name: 'Греция',
    link: 'https://images.unsplash.com/photo-1594325993288-b118b1a0d7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1446822622709-e1c7ad6e82d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1619866328625-a70d35ec49db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
  },
  {
    name: 'Канада',
    link: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Норвегия',
    link: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  }
]

const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditPopupProfile = document.querySelector('.profile__button-edit');
const buttonAddPopupProfile = document.querySelector('.profile__button-add');

// Находим форму в DOM
const formElementProfile = popupEditProfile.querySelector('.popup__form_name_profile');

// Находим поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElementProfile.querySelector('.popup__input_type_info');// Воспользуйтесь инструментом .querySelector()

const profileNameSelector = '.profile__name';
const profileAboutSelector = '.profile__about';
const cardListSection = '.content__elements';
const popupOpenCard = '.popup_type_open';
const popupAddCardSelector = '.popup_type_add';
const popupEditProfileSelector = '.popup_type_edit';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export {
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
}

