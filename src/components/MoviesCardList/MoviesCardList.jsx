import React  from 'react';
import MovieCard from '../MoviesCard/MoviesCard';


function MoviesCardList() {
    return(
        <div className='cards'>
            <div className='card__list'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            </div>
            <button className='cards__more-films'>Еще</button>
        </div>
    )
}

export default MoviesCardList;