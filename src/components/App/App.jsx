import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/movies'>
          <Movies loggedIn={loggedIn} />
        </Route>
        <Route path='/saved-movies' component={SavedMovies}></Route>
        <Route path='/profile'>
          <Profile  />
        </Route>
        <Route path='/signin' component={Login}></Route>
        <Route
          path='/signup'
          component={Register}
          buttonText='Зарегистрироваться'
        ></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
