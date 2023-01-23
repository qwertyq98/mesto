export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userAbout.textContent,
    }
  }

  setUserInfo({ name, info }) {
    this._userName.textContent = name;
    this._userAbout.textContent = info;
  }
}