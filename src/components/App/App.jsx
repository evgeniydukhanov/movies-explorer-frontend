import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from '../Main/Main'
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext, InfoToolTipContext, MovieContext } from "../../contexts/store";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { defaultMovieState } from "../../contexts/movie-context";
import { defaultUserState } from "../../contexts/user-context";
import { defaultInfoToolTipState } from "../../contexts/infotooltip-context";
import mainApi from "../../utils/MainApi";

function App() {
  const [moviesState, setMoviesState] = useState(defaultMovieState);
  const [userState, setUserState] = useState(defaultUserState);
  const [toolTipState, setToolTipState] = useState(defaultInfoToolTipState);

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userState.loggedIn) {
      mainApi
        .getSavedMovies()
        .then((savedMoviesData) => {
          const savedMovies = savedMoviesData.filter((item) => item.owner === userState._id);
          console.log(savedMoviesData, userState);
          setMoviesState({ ...moviesState, savedMovies, filteredSavedMovies: savedMovies });
        })
        .catch(console.log);
    }
  }, [userState.loggedIn]);

  return (
    <CurrentUserContext.Provider value={{ userState, setUserState }}>
      <MovieContext.Provider value={{ moviesState, setMoviesState }}>
        <InfoToolTipContext.Provider value={{ toolTipState, setToolTipState }}>
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/signin" component={Login}></Route>
              <Route
                exact
                path="/signup"
                component={Register}
                buttonText="Зарегистрироваться"
              ></Route>
              <ProtectedRoute>
                <Route exact path="/movies">
                  <Movies />
                </Route>
                <Route exact path="/saved-movies">
                  <SavedMovies />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </ProtectedRoute>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </div>
        </InfoToolTipContext.Provider>
      </MovieContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
