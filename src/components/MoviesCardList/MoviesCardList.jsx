import React, { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCardList() {
  const { movies, setMovies } = React.useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => `Не удалось получить фильмы с сервера : ${err}`);
  }, [movies.length, setMovies]);

  return (
    <div className='cards'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='card__list'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <Route path='/movies'>
            <button className='cards__more-films'>Еще</button>
          </Route>
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
