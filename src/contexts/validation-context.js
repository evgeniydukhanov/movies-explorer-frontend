import { createContext } from "react";

export const defaultValidationState = {
  profile: { errors: { name: "", email: "" } },
  register: {
    errors: { name: "", email: "", password: "" },
  },
  login: { errors: { email: "", password: "" } },
};

export const ValidationContext = createContext(null);
