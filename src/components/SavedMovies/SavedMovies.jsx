import React  from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function SavedMovies(){ 
    return(
    <main className='saved__movies'>

        <Header/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

    )
}

export default SavedMovies;