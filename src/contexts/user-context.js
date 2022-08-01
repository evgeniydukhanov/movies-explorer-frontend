import { createContext } from "react";

export const defaultUserState = {
  _id: "",
  name: "",
  email: "",
  loggedIn: false,
};

export const CurrentUserContext = createContext(null);
