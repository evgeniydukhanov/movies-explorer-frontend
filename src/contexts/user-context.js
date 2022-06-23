import { createContext } from "react";

export const defaultUserState = {
  _id: "",
  name: "",
  email: "",
  loggedIn: true,
};

export const CurrentUserContext = createContext(null);
