import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import NotFound from '../NotFound/NotFound';
import {
  CurrentUserContext,
  InfoToolTipContext,
  MovieContext,
} from '../../contexts/store';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { defaultMovieState } from '../../contexts/movie-context';
import { defaultUserState } from '../../contexts/user-context';
import { defaultInfoToolTipState } from '../../contexts/infotooltip-context';
import mainApi from '../../utils/MainApi';
import {
  defaultValidationState,
  ValidationContext,
} from '../../contexts/validation-context';
import InfoToolTip from '../InfoTooltip/InfoTooltip';

function App() {
  const [moviesState, setMoviesState] = useState(defaultMovieState);
  const [userState, setUserState] = useState(defaultUserState);
  const [toolTipState, setToolTipState] = useState(defaultInfoToolTipState);
  const [validationState, setValidationState] = useState(
    defaultValidationState,
  );

  const [request, setRequest] = useState(true);

  useEffect(() => {
    setRequest(true);
    const moviesStorage = JSON.parse(localStorage.getItem('movies'));
    if (moviesStorage) {
      setMoviesState(moviesStorage);
    }
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
        console.log(err);
        localStorage.clear();
      })
      .finally(() => setRequest(false));
  }, []);

  return (
    !request && (
      <CurrentUserContext.Provider value={{ userState, setUserState }}>
        <MovieContext.Provider value={{ moviesState, setMoviesState }}>
          <InfoToolTipContext.Provider
            value={{ toolTipState, setToolTipState }}
          >
            <ValidationContext.Provider
              value={{ validationState, setValidationState }}
            >
              <div className='page'>
                <InfoToolTip />
                <Switch>
                  <ProtectedRoute path='/movies' component={Movies} />
                  <Route exact path='/'>
                    <Main />
                  </Route>
                  <Route exact path='/signin' component={Login}></Route>
                  <Route
                    exact
                    path='/signup'
                    component={Register}
                    buttonText='Зарегистрироваться'
                  ></Route>

                  <ProtectedRoute
                    path='/saved-movies'
                    component={SavedMovies}
                  />
                  <ProtectedRoute path='/profile' component={Profile} />
                  <Route path='*' component={NotFound}></Route>
                </Switch>
              </div>
            </ValidationContext.Provider>
          </InfoToolTipContext.Provider>
        </MovieContext.Provider>
      </CurrentUserContext.Provider>
    )
  );
}

export default App;
