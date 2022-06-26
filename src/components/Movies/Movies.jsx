import React, { useContext, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MovieContext } from '../../contexts/movie-context';
import mainApi from '../../utils/MainApi';
import { moviesApiAddress } from '../../utils/constants';
import moviesApi from '../../utils/MoviesApi';
import { InfoToolTipContext } from '../../contexts/infotooltip-context';

function Movies() {
  const { moviesState, setMoviesState } = useContext(MovieContext);
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const [request, setRequest] = useState(false);

  function handleChangeSearchText(e) {
    setMoviesState({
      ...moviesState,
      moviesSearchText: e.target.value,
    });
  }

  function handleClickLike(movie) {
    const savedMovie = moviesState.savedMovies.find(
      (item) => item.movieId === movie.id,
    );
    if (savedMovie) {
      mainApi.deleteMovie(savedMovie._id).then(({ data }) => {
        const savedMovies = moviesState.savedMovies.filter(
          (item) => item.movieId !== data.movieId,
        );
        setMoviesState({ ...moviesState, savedMovies });
      });
    } else {
      const saveMovie = {
        country: movie.country || 'Unknown',
        director: movie.director || 'Unknown',
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${moviesApiAddress}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU || 'Unknown',
        nameEN: movie.nameEN || 'Unknown',
        thumbnail: `${moviesApiAddress}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      };
      mainApi.saveMovie(saveMovie).then((movie) => {
        setMoviesState({
          ...moviesState,
          savedMovies: [...moviesState.savedMovies, movie],
        });
      });
    }
    localStorage.setItem('movies', JSON.stringify(moviesState));
  }

  function filterMovies() {
    const searchText = moviesState.moviesSearchText.toLowerCase();
    if (searchText === '') {
      return;
    }
    const filteredMovies = moviesState.list.filter(
      ({ nameRU, nameEN, duration }) => {
        const nameFilm = `${nameRU}${nameEN}`.toLowerCase();
        if (moviesState.moviesCheckbox) {
          return nameFilm.includes(searchText) && duration <= 40;
        }
        return nameFilm.includes(searchText);
      },
    );
    setMoviesState({
      ...moviesState,
      filteredMovies,
      notFoundMovies: filteredMovies.length === 0,
    });
    localStorage.setItem('movies', JSON.stringify(moviesState));
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    setRequest(true);
    moviesApi
      .getMovies()
      .then((moviesData) => {
        setMoviesState({ ...moviesState, list: moviesData });
        filterMovies();
      })
      .catch((err) => {
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`,
          success: false,
        });
      })
      .finally(() => {
        setRequest(false);
      });
  }

  function toggleCheckbox() {
    setMoviesState({
      ...moviesState,
      moviesCheckbox: !moviesState.moviesCheckbox,
    });
  }

  useEffect(() => {
    filterMovies();
  }, [
    moviesState.moviesCheckbox,
    moviesState.list.length,
    moviesState.savedMovies.length,
  ]);

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((moviesData) => {
        setMoviesState({ ...moviesState, list: moviesData });
        filterMovies();
      })
      .catch((err) => `Не удалось получить фильмы с сервера : ${err}`)
      .finally(() => {
        setRequest(false);
      });
  }, []);

  return (
    <main className='movies'>
      <Header />
      <SearchForm
        onChange={handleChangeSearchText}
        onSubmit={handleSubmitSearch}
        searchText={moviesState.moviesSearchText}
        checkbox={moviesState.moviesCheckbox}
        toggleCheckbox={toggleCheckbox}
      />
      <MoviesCardList
        movies={moviesState.filteredMovies}
        handleClickLike={handleClickLike}
        notFound={moviesState.notFoundMovies}
        request={request}
      />
      <Footer />
    </main>
  );
}

export default Movies;
