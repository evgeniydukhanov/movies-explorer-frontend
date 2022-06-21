import { useContext, useState } from "react";
import MovieCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router-dom";
import { MovieContext } from "../../contexts/store";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, handleClickLike, request }) {
  const { moviesState } = useContext(MovieContext);
  const [initCount, setInitCount] = useState(12);
  const [count, seCount] = useState(12);

  function handleClickMore() {
    seCount(count + initCount);
  }

  return (
    <div className="cards">
      {request ? (
        <Preloader />
      ) : (
        <>
          <div className="card__list">
            {movies.slice(0, count).map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                handleClickLike={handleClickLike}
              />
            ))}
          </div>
          <Route path="/movies">
            {movies.length > count && (
              <button className="cards__more-films" onClick={handleClickMore}>
                Еще
              </button>
            )}
          </Route>
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
