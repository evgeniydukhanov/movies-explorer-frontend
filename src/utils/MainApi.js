import { mainApiAddress } from "./constants";

class MainApi {
  constructor({ address }) {
    this._address = address;
    this._headers = {
      "Content-Type": "application/json",
    };
  }
  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      message: response.statusText,
      status: response.status,
    });
  };

  login(form) {
    return fetch(`${this._address}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(form),
    }).then(this._handleResponse);
  }

  registration(form) {
    return fetch(`${this._address}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(form),
    }).then(this._handleResponse);
  }

  async getUserInfo() {
    return await fetch(`${this._address}/users/me`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  patchUserInfo(form) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(form),
    }).then(this._handleResponse);
  }

  logout() {
    return fetch(`${this._address}/signout`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._address}/movies`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._address}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._address}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  address: mainApiAddress,
});

export default mainApi;
