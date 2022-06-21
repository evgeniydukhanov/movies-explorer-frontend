import React, { useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MovieContext } from "../../contexts/movie-context";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/user-context";

function SavedMovies() {
  const { moviesState, setMoviesState } = useContext(MovieContext);
  const { userState } = useContext(CurrentUserContext);

  function handleChangeSearchText(e) {
    setMoviesState({
      ...moviesState,
      savedMoviesSearchText: e.target.value,
    });
  }

  function handleClickLike(movie) {
    mainApi.deleteMovie(movie._id).then(({ data }) => {
      const savedMovies = moviesState.savedMovies.filter((item) => item.movieId !== data.movieId);
      setMoviesState({ ...moviesState, savedMovies });
    });
  }

  function filterMovies() {
    const searchText = moviesState.savedMoviesSearchText.toLowerCase();
    const filteredSavedMovies = moviesState.savedMovies.filter(({ nameRU, nameEN, duration }) => {
      if (moviesState.savedMoviesCheckbox) {
        return `${nameRU}${nameEN}`.includes(searchText) && duration <= 40;
      }
      return `${nameRU}${nameEN}`.includes(searchText);
    });
    setMoviesState({
      ...moviesState,
      filteredSavedMovies,
    });
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    mainApi
      .getSavedMovies()
      .then((savedMoviesData) => {
        const savedMovies = savedMoviesData.filter((movie) => movie.owner === userState._id);
        setMoviesState({ ...moviesState, savedMovies });
        filterMovies();
      })
      .catch(console.log);
  }

  function toggleCheckbox() {
    setMoviesState({
      ...moviesState,
      savedMoviesCheckbox: !moviesState.savedMoviesCheckbox,
    });
  }
  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedMoviesData) => {
        const savedMovies = savedMoviesData.filter((movie) => movie.owner === userState._id);
        setMoviesState({ ...moviesState, savedMovies, filteredSavedMovies: savedMovies });
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    filterMovies();
  }, [moviesState.savedMoviesCheckbox, moviesState.savedMovies.length]);

  return (
    <main className="saved__movies">
      <Header />
      <SearchForm
        onChange={handleChangeSearchText}
        onSubmit={handleSubmitSearch}
        searchText={moviesState.savedMoviesSearchText}
        checkbox={moviesState.savedMoviesCheckbox}
        toggleCheckbox={toggleCheckbox}
      />
      <MoviesCardList movies={moviesState.filteredSavedMovies} handleClickLike={handleClickLike} />
      <Footer />
    </main>
  );
}

export default SavedMovies;
