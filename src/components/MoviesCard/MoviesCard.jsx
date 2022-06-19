import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { moviesApiAddress } from '../../utils/constants';

function MovieCard(movie) {
  const [saveBtn, setSaveBtnActive] = useState(false);
  const durationHours = Math.floor(movie.duration / 60);
  const durationMinutes = movie.duration % 60;
  function toggleSaveBtn(e) {
    setSaveBtnActive(!saveBtn);
  }
  return (
    <div className='card'>
      <div className='card__description'>
        <div className='card__text'>
          <h4 className='card__heading'>{movie.nameRU}</h4>
          <p className='card__duration'>{`${durationHours + 'ч'} ${durationMinutes}м`}</p>
        </div>
        <Route path='/movies'>
          <button
            className={`${
              saveBtn ? 'card__saveBtn_active' : 'card__saveBtn'
            }    `}
            onClick={toggleSaveBtn}
          ></button>
        </Route>
        <Route path='/saved-movies'>
          <button className='card__unSaveBtn' onClick={toggleSaveBtn}></button>
        </Route>
      </div>
      <img className='card__img' src={`${moviesApiAddress + movie.image.url}`} alt={movie.nameRU}></img>
    </div>
  );
}

export default MovieCard;
