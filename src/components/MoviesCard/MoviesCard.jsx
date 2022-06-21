import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { MovieContext } from "../../contexts/movie-context";
import { moviesApiAddress } from "../../utils/constants";

function MovieCard({ movie, handleClickLike }) {
  const { moviesState } = useContext(MovieContext);
  const durationHours = Math.floor(movie.duration / 60);
  const durationMinutes = movie.duration % 60;
  const saveBtn = moviesState.savedMovies.some((item) => item.movieId === movie.id);

  const image = movie.image.url ? `${moviesApiAddress + movie.image.url}` : movie.image;

  function onClickLike() {
    handleClickLike(movie);
  }

  useEffect(() => {}, [moviesState.savedMovies.length]);

  return (
    <div className="card">
      <div className="card__description">
        <div className="card__text">
          <h4 className="card__heading">{movie.nameRU}</h4>
          <p className="card__duration">{`${durationHours + "ч"} ${durationMinutes}м`}</p>
        </div>
        <Route path="/movies">
          <button
            className={`${saveBtn ? "card__saveBtn_active" : "card__saveBtn"}    `}
            onClick={onClickLike}
          ></button>
        </Route>
        <Route path="/saved-movies">
          <button className="card__unSaveBtn" onClick={onClickLike}></button>
        </Route>
      </div>
      <img className="card__img" src={image} alt={movie.nameRU}></img>
    </div>
  );
}

export default MovieCard;
