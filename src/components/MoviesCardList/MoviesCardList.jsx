import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
function MoviesCardList() {
  return (
    <div className='cards'>
      <div className='card__list'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <Route path='/movies'>
      <button className='cards__more-films'>Еще</button>
      </Route>
    </div>
  );
}

export default MoviesCardList;
