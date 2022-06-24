import validator from "validator";

import {
  allowedSymbolsPattern,
  namePattern,
  passwordPattern,
  validationMessages,
} from "./constants";

export const isEmail = (email) => {
  return !validator.isEmail(email) ? validationMessages.email : "";
};

export const validityName = (string) => {
  const name = String(string).toLowerCase();
  const includeSymbols = allowedSymbolsPattern.test(name);
  const singleMatch = name.match(namePattern);
  const numberMatch = name.match(/[0-9]/);
  return !singleMatch || singleMatch.length > 1 || includeSymbols || numberMatch?.length >= 1
    ? validationMessages.name
    : "";
};

export const validityPassword = (string) => {
  const password = String(string).toLowerCase();
  const includeSymbols = allowedSymbolsPattern.test(password);
  const singleMatch = password.match(passwordPattern).length;
  return singleMatch > 1 || includeSymbols ? validationMessages.password : "";
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

export function checkValidation(event, typeForm) {
  let errorMessage = event.target.validationMessage;
  switch (event.target.name) {
    case "name":
      errorMessage = errorMessage || validityName(event.target.value);
      return {
        newState: _setState({ typeForm, typeInput: "name", errorMessage }),
      };

    case "email":
      errorMessage = errorMessage || isEmail(event.target.value);
      return {
        newState: _setState({ typeForm, typeInput: "email", errorMessage }),
      };

    case "password":
      errorMessage = errorMessage || validityPassword(event.target.value);
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
