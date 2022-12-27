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
const popupAddCard = document.querySelector('.popup_type_add');
const buttonEditPopupProfile = document.querySelector('.profile__button-edit');
const buttonAddPopupProfile = document.querySelector('.profile__button-add');
const popupCloseButtonElements = document.querySelectorAll('.popup__button_close');
const cardNameInput = popupAddCard.querySelector('.popup__input_type_name');
const cardLinkInput = popupAddCard.querySelector('.popup__input_type_url');
const popupOpenCard = document.querySelector('.popup_type_open');
const popups = document.querySelectorAll('.popup');
const popupImage = popupOpenCard.querySelector('.popup__image');
const popupTitle = popupOpenCard.querySelector('.popup__title');

// Находим форму в DOM
const formElementProfile = popupEditProfile.querySelector('.popup__form_name_profile');
const formElementCard = popupAddCard.querySelector('.popup__form_name_card');

// Находим поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElementProfile.querySelector('.popup__input_type_info');// Воспользуйтесь инструментом .querySelector()

const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const cardsContainer = document.querySelector('.content__elements');

export {
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
}