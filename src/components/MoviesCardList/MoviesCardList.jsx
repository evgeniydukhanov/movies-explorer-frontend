import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import moviesApi from '../../utils/MoviesApi';
function MoviesCardList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesApi
      .getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => `Не удалось получить карточки с сервера : ${err}`);
  }, [movies.length]);

  return (
    <div className='cards'>
      <div className='card__list'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Route path='/movies'>
        <button className='cards__more-films'>Еще</button>
      </Route>
    </div>
  );
}

export default MoviesCardList;
