const popupElement = document.querySelector('.popup');
const editButtonElement = document.querySelector('.profile__button-edit');
const popupCloseButtonElement = document.querySelector('.popup__close-button');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__text-item_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.popup__text-item_about');// Воспользуйтесь инструментом .querySelector()

// Выберите элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

editButtonElement.addEventListener('click', function () {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
  openPopup();
});
popupCloseButtonElement.addEventListener('click',closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

// Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const aboutValue = jobInput.value;

  profileNameElement.textContent = nameValue;
  profileAboutElement.textContent = aboutValue;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', function (evt) {
  formSubmitHandler(evt);
  closePopup();
});

// editButtonElement.addEventListener('click', function () {
//   nameInput.value = profileNameElement.textContent;
//   jobInput.value = profileAboutElement.textContent;
//   openPopup();
// });