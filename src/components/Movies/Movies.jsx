import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({loggedIn}){ 
    return(
    <main className='movies'>

        <Header loggedIn={loggedIn}/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

    )
}

export default Movies;