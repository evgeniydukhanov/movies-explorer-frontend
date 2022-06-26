import { createContext } from "react";

export const defaultInfoToolTipState = {
  isOpen: false,
  message: "",
  success: false
};

export const InfoToolTipContext = createContext();
