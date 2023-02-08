const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditPopupProfile = document.querySelector('.profile__button-edit');
const buttonAddPopupProfile = document.querySelector('.profile__button-add');
const buttonEditAvatar = document.querySelector('.profile__button');

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
const popupEditAvatarSelector = '.popup_type_avatar';
const popupCheckSelector = '.popup_type_check';
const profileAvatarSelector = '.profile__avatar';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export {
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
}

