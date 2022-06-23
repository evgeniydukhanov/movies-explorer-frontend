import { createContext } from "react";

export const defaultMovieState = {
  list: [],
  filteredMovies: [],
  moviesCheckbox: false,
  moviesSearchText: "",
  savedMovies: [],
  filteredSavedMovies: [],
  savedMoviesCheckbox: false,
  savedMoviesSearchText: "",
  isLoading: false,
  notFoundMovies: false,
  notFoundSavedMovies: false,
};

export const MovieContext = createContext();
