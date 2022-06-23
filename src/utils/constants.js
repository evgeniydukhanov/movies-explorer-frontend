export const moviesApiAddress = "https://api.nomoreparties.co";

export const mainApiAddress = "https://api.lookatme.nomoreparties.sbs";


export const regForSymbols = /[_~!@#$%^&*()\[\]+`'";:<>\/\\|=]/g;
export const regForName = /[a-z-. а-яё]+/g;
export const regForPassword = /[0-9a-z-а-яё]+/g;

export const validationMessages = {
  name: "Имя содержит недопустимые символы. Текст может состоять из латиницы, кириллицы, дефиса, пробела.",
  email: "Введите корректный формат почты",
  password:
    "Пароль содержит не допустимые символы. Текст может состоять из цифр, латиницы, кириллицы, дефиса.",
};

export const resMessages = {
  409: "Пользователь с введенным email уже зарегистрирован.",
  401: "Пользователь не авторизован / не зарегистрирован.",
  500: "Ошибка на сервере.",
  400: "Введенные данные невалидны проверьте адрес или введите корректные данные.",
};
