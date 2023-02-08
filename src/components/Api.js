export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  setUserInfoPopap(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userAbout
      })
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  like(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }

  changeUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
  }
}

