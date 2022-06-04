import React from 'react';
import film from '../../images/film.jpg';

function MovieCard() {
  return (
    <div className='card'>
      <h4 className='card__heading'>33 слова о дизайне</h4>
      <p className='card__duration'>1ч 47м</p>

      <button className='card__save'></button>

      <img className='card__img' src={film} alt='Превью'></img>
    </div>
  );
}

export default MovieCard;
