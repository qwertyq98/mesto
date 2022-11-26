import {initialCards} from './constants.js';

const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const editButtonElement = document.querySelector('.profile__button-edit');
const addButtonElement = document.querySelector('.profile__button-add');
const popupCloseButtonElements = document.querySelectorAll('.popup__close-button');
const cardNameInput = popupAddCard.querySelector('.popup__text-item_type_name');
const cardLinkInput = popupAddCard.querySelector('.popup__text-item_type_url');
const popupOpenCard = document.querySelector('.popup_open');


// Находим форму в DOM
const formElementProfile = popupEditProfile.querySelector('.popup__form_name_profile');// Воспользуйтесь методом querySelector()
const formElementCard = popupAddCard.querySelector('.popup__form_name_card');

// Находим поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__text-item_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElementProfile.querySelector('.popup__text-item_type_info');// Воспользуйтесь инструментом .querySelector()

// Выберите элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const cardsContainer = document.querySelector('.content__elements');

// Попапы открытие/закрытие
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
}
const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
}

// Лайк
const toggleLike = (evt) => {
  evt.target.classList.toggle('element__like_active');
}

// Поставить/убрать лайк
document.addEventListener('click', function (evt){
  if (evt.target.classList.contains('element__like')) {
    toggleLike(evt);
  }
});

// Удалить катрочку
document.addEventListener('click', function (evt){
  if (evt.target.classList.contains('element__trash')) {
    evt.target.closest('.element').remove();
  }
});

// Создать карточки

const createCard = item => {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;

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
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
  openPopup(popupEditProfile);
});

// Открытие попапа добавления карточки

addButtonElement.addEventListener('click', function () {
  openPopup(popupAddCard);
  cardNameInput.value = '';
  cardLinkInput.value = '';
});

//Открытие попапа карточки

document.addEventListener('click', function (evt) {
  const element = evt.target;
  if (element.classList.contains('element__image')) {
    popupOpenCard.querySelector('.popup__image').src = element.src;
    popupOpenCard.querySelector('.popup__title').textContent = element.alt;
    openPopup(popupOpenCard);
  }
});

// Закрытие любого попапа

popupCloseButtonElements.forEach(function (item) {
  item.addEventListener('click',function (evt) {
    closePopup(evt.target.closest('.popup'));
  });
});

//Добавление какточки через форму

function formCardSubmitHandler (evt) {
  evt.preventDefault();

  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  renderCard(newCard, cardsContainer);
}
formElementCard.addEventListener('submit', function (evt) {
  formCardSubmitHandler(evt);
  closePopup(popupAddCard);
});

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

// Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const aboutValue = jobInput.value;

  profileNameElement.textContent = nameValue;
  profileAboutElement.textContent = aboutValue;
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener('submit', function (evt) {
  formSubmitHandler(evt);
  closePopup(popupEditProfile);
});
