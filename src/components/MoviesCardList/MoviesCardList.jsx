import { useEffect, useState } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { updateWidth } from '../../utils/updateWidth';

function MoviesCardList({
  movies,
  handleClickLike,
  request = false,
  notFound,
}) {
  const { _initCount, _count } = updateWidth(window.innerWidth);

  const [count, setCount] = useState(_count);
  const [initCount, seInitCount] = useState(_initCount);
  const [totalCount, setTotalCount] = useState(initCount);

  function handleClickMore() {
    setTotalCount(totalCount + count);
  }

  function updateAfterResize() {
    const update = updateWidth(window.innerWidth);
    setCount(update._count);
    seInitCount(update._initCount);
    return window.innerWidth;
  }

  useEffect(() => {
    updateAfterResize();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', updateAfterResize);
    }, 100);
    return () => window.removeEventListener('resize', updateAfterResize);
  }, []);

  return (
    <div className='cards'>
      {request ? (
        <Preloader />
      ) : (
        <>
          <div className='card__list'>
            {notFound && movies.length === 0 && 'Ничего не найдено'}
            {movies.slice(0, totalCount).map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                handleClickLike={handleClickLike}
              />
            ))}
          </div>
          <Route path='/movies'>
            {movies.length > totalCount && (
              <button className='cards__more-films' onClick={handleClickMore}>
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
