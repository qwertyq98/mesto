export default class Section {
  constructor({ items, renderer }, selector) {
    this._initialArray = items;
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });

  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}