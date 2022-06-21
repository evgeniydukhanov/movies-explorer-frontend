import { moviesApiAddress } from "./constants";

class MoviesApi {
  constructor({ address }) {
    this._address = address;
    this._headers = { "Content-type": "application/json" };
  }
  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
  };
  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  address: moviesApiAddress
});

export default moviesApi;
