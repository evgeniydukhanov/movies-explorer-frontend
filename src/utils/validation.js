import validator from "validator";

import {
  regForSymbols,
  regForName,
  regForPassword,
  validationMessages,
} from "./constants";

export const isEmail = (email) => {
  return !validator.isEmail(email) ? validationMessages.email : "";
};

export const isName = (string) => {
  const name = String(string).toLowerCase();
  const haveSymbols = regForSymbols.test(name);
  const singleMatch = name.match(regForName);
  return !singleMatch || singleMatch.length > 1 || haveSymbols
    ? validationMessages.name
    : "";
};

export const isPassword = (string) => {
  const password = String(string).toLowerCase();
  const haveSymbols = regForSymbols.test(password);
  const singleMatch = password.match(regForPassword).length;
  return singleMatch > 1 || haveSymbols ? validationMessages.password : "";
};

export const _setState =
  ({ typeForm, typeInput, errorMessage }) =>
  (state) => {
    if (typeForm === "") return state;
    return {
      ...state,
      [typeForm]: {
        ...state[typeForm],
        errors: {
          ...state[typeForm].errors,
          [typeInput]: errorMessage,
        },
      },
    };
  };

// принимает event и тип формы (login или register или profile)
// в евенте забираем сообщение стандартного валидатора если есть
// ловим инпут на который валидируется проверяем валидацию через доп функции
// возвращаем объект с полем newState в которой hoc функция _setState
// она принимает параметр state - стейт контекста валидации
// _setState - возвращает обновленный стейт

export function checkValidation(event, typeForm) {
  let errorMessage = event.target.validationMessage;
  switch (event.target.name) {
    case "name":
      errorMessage = errorMessage || isName(event.target.value);
      return {
        newState: _setState({ typeForm, typeInput: "name", errorMessage }),
      };

    case "email":
      errorMessage = errorMessage || isEmail(event.target.value);
      return {
        newState: _setState({ typeForm, typeInput: "email", errorMessage }),
      };

    case "password":
      errorMessage = errorMessage || isPassword(event.target.value);
      return {
        newState: _setState({ typeForm, typeInput: "password", errorMessage }),
      };

    default:
      return {
        newState: _setState({
          typeForm: "",
          typeInput: event.target.name,
          errorMessage,
        }),
      };
  }
}
