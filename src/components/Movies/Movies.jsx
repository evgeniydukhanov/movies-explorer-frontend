import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Footer from '../Footer/Footer';

function Movies(){ 
    return(
    <main className='movies'>


        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

    )
}

export default Movies;