import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => `Не удалось получить карточки с сервера : ${err}`);
  }, [movies.length]);

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
