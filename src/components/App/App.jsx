import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const [loggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path='/movies'>
            <Movies loggedIn={loggedIn} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies loggedIn={loggedIn} />
          </Route>
          <Route path='/profile'>
            <Profile />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
