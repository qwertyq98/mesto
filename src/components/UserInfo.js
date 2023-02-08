export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userAbout.textContent,
    }
  }

  setUserInfo({ name, about, _id }) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userId = _id;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }

  getId() {
    return this._userId;
  }
}