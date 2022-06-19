import { mainApiAddress } from './constants';

class MainApi {
    constructor({ address }) {
        this._address = address;
        this._headers = { "Content-type": "application/json" };
    }
    _handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        }).then(this._handleResponse)
    }
    patchUserInfo({ name, about }) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._handleResponse)
    }
}


const mainApi = new MainApi({
    address: mainApiAddress,
});

export default mainApi;