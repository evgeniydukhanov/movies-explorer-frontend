export const moviesApiAddress = "https://api.nomoreparties.co";

export const mainApiAddress = "https://api.lookatme.nomoreparties.sbs";

export const passwordPattern = /[0-9a-z-а-яё]+/g;
export const namePattern = /[a-z-. а-яё]+/g;
export const allowedSymbolsPattern = /[_~!@#$%^&*()\[\]+`'";:<>\/\\|=]/g;




export const validationMessages = {
  name: "Имя содержит недопустимые символы. Имя может содержать латинские буквы, кириллицу, пробел и дефис.",
  email: "Введен некорректный формат эл.почты",
  password: "Пароль содержит не допустимые символы. Пароль может содержать цифры, латиницу, кириллицу, дефис.",
};

export const errMessages = {
  409: "Пользователь с таким email уже существует",
  401: "Вы ввели неправильный логин или пароль / пользователь не зарегистрирован",
  500: "На сервере произошла ошибка",
  400: "Введены некорректные данные, проверьте правильность ввода",
};

export const updateWidth = (width) => {
  if (width <= 480) {
    return { _initCount: 5, _count: 2 };
  }
  if (width <= 768) {
    return { _initCount: 8, _count: 2 };
  } else {
    return { _initCount: 12, _count: 3 };
  }
};
