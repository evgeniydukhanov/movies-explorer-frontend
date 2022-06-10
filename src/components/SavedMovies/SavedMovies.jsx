import React  from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function SavedMovies({loggedIn}){ 
    return(
    <main className='saved__movies'>
        <Header loggedIn={loggedIn}/>

        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

    )
}

export default SavedMovies;