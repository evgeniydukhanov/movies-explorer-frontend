import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className='body'>
      <div className='page'>
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/saved-movies' component={SavedMovies}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/signin' component={Login}></Route>
          <Route path='/signup' component={Register}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
