import React, { useContext, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MovieContext } from '../../contexts/movie-context';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/user-context';

function SavedMovies() {
  const { moviesState, setMoviesState } = useContext(MovieContext);
  const { userState } = useContext(CurrentUserContext);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedMoviesData) => {
        const savedMovies = savedMoviesData.filter(
          (item) => item.owner === userState._id,
        );
        setMoviesState({
          ...moviesState,
          savedMovies,
          savedMoviesCheckbox: false,
          savedMoviesSearchText: '',
          filteredSavedMovies: savedMovies,
        });
      })
      .catch(console.log);
  }, []);

  function handleChangeSearchText(e) {
    setMoviesState({
      ...moviesState,
      savedMoviesSearchText: e.target.value,
    });
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id);
    const savedMovies = moviesState.savedMovies.filter(
      (item) => item.movieId !== movie.movieId,
    );
    setMoviesState({
      ...moviesState,
      savedMovies,
      filteredSavedMovies: filterMovies({ ...moviesState, savedMovies }),
    });
  }

  function filterMovies(state) {
    const { savedMoviesSearchText, savedMovies, savedMoviesCheckbox } = state;
    const searchText = savedMoviesSearchText.toLowerCase();
    const filteredSavedMovies = savedMovies.filter(
      ({ nameRU, nameEN, duration }) => {
        const nameFilm = `${nameRU}${nameEN}`.toLowerCase();
        if (savedMoviesCheckbox) {
          return nameFilm.includes(searchText) && duration <= 40;
        }
        return nameFilm.includes(searchText);
      },
    );
    return filteredSavedMovies;
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    const filteredSavedMovies = filterMovies(moviesState);
    setMoviesState({
      ...moviesState,
      filteredSavedMovies,
      notFoundSavedMovies: filteredSavedMovies.length === 0,
    });
  }

  function toggleCheckbox() {
    const filteredSavedMovies = filterMovies({
      ...moviesState,
      savedMoviesCheckbox: !moviesState.savedMoviesCheckbox,
    });
    setMoviesState({
      ...moviesState,
      filteredSavedMovies,
      savedMoviesCheckbox: !moviesState.savedMoviesCheckbox,
      notFoundSavedMovies: filteredSavedMovies.length === 0,
    });
  }

  useEffect(() => {
    filterMovies(moviesState);
  }, [moviesState.savedMoviesCheckbox, moviesState.savedMovies.length]);

  return (
    <main className='saved__movies'>
      <Header />
      <SearchForm
        onChange={handleChangeSearchText}
        onSubmit={handleSubmitSearch}
        searchText={moviesState.savedMoviesSearchText}
        checkbox={moviesState.savedMoviesCheckbox}
        toggleCheckbox={toggleCheckbox}
      />
      <MoviesCardList
        movies={moviesState.filteredSavedMovies}
        handleClickLike={handleDeleteMovie}
        notFound={moviesState.notFoundSavedMovies}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
