import { useCallback, useEffect, useState } from "react";
import MovieCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, handleClickLike, request = false, notFound }) {
  const [count, setCount] = useState(3);
  const [initCount, seInitCount] = useState(12);
  const [totalCount, setTotalCount] = useState(initCount);
  const [width, setWidth] = useState(window.innerWidth);

  function handleClickMore() {
    setTotalCount(totalCount + count);
  }

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
    if (width <= 480) {
      seInitCount(5);
      setCount(2);
    }
    if (width <= 768) {
      seInitCount(8);
      setCount(2);
    } else {
      seInitCount(12);
      setCount(3);
    }
  }, [width]);

  useEffect(() => {
    updateWidth();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", updateWidth);
    }, 100);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  return (
    <div className="cards">
      {request ? (
        <Preloader />
      ) : (
        <>
          <div className="card__list">
            {notFound && movies.length === 0 && "Ничего не найдено"}
            {movies.slice(0, totalCount).map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                handleClickLike={handleClickLike}
              />
            ))}
          </div>
          <Route path="/movies">
            {movies.length > totalCount && (
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
