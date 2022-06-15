import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import film from '../../images/film.jpg';

function MovieCard() {
  const [saveBtn, setSaveBtnActive] = useState(false);

  function toggleSaveBtn(e) {
    setSaveBtnActive(!saveBtn);
  }
  return (
    <div className='card'>
      <div className='card__description'>
        <div className='card__text'>
          <h4 className='card__heading'>33 слова о дизайне</h4>
          <p className='card__duration'>1ч 47м</p>
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
      <img className='card__img' src={film} alt='Превью'></img>
    </div>
  );
}

export default MovieCard;
