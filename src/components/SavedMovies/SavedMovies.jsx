import React  from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies(){ 
    return(
    <main className='saved__movies'>

        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
    </main>

    )
}

export default SavedMovies;