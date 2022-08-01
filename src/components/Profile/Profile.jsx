import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  defaultInfoToolTipState,
  InfoToolTipContext,
} from '../../contexts/infotooltip-context';
import { defaultMovieState, MovieContext } from '../../contexts/movie-context';
import {
  CurrentUserContext,
  defaultUserState,
} from '../../contexts/user-context';
import { ValidationContext } from '../../contexts/validation-context';
import { errMessages } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import { checkValidation } from '../../utils/validation';
import Header from '../Header/Header';

function Profile() {
  const { setMoviesState } = useContext(MovieContext);
  const { userState, setUserState } = useContext(CurrentUserContext);
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const { validationState, setValidationState } = useContext(ValidationContext);
  const history = useHistory();
  const [errorRequest, setErrorRequest] = useState('');

  const [form, setForm] = useState({
    name: userState.name,
    email: userState.email,
  });

  useEffect(() => {
    mainApi.getUserInfo().then((user) => {
      setUserState({
        ...userState,
        name: user.name,
        email: user.email,
        _id: user._id,
      });
      setForm({ name: user.name, email: user.email });
    });
  }, []);

  const includesErrors = useMemo(
    () =>
      Object.values(validationState.profile.errors).some(
        (errorMessage) => errorMessage,
      ),
    [validationState.profile.errors],
  );

  function handleChange(e) {
    setErrorRequest('');
    const { newState } = checkValidation(e, 'profile');
    setErrorRequest('');
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogout() {
    localStorage.clear();
    setMoviesState(defaultMovieState);
    setToolTipState(defaultInfoToolTipState);
    setUserState({ ...defaultUserState, loggedIn: false });
    mainApi
      .logout()
      .then((msg) => {
        history.push('/');
      })
      .catch(console.log);
  }

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .patchUserInfo(form)
      .then((user) => {
        setUserState({ ...userState, ...form });

        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: 'Профиль успешно изменен',
          success: true,
        });
      })
      .catch(({ status, message }) => {
        console.log(message);
        setErrorRequest(errMessages[status]);
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: 'Не удалось обновить данные профиля',
          success: false,
        });
      });
  }

  useMemo(() => {
    setForm({ name: userState.name, email: userState.email });
  }, [userState.name, userState.email]);

  const isNewUserInfo =
    userState.name !== form.name || userState.email !== form.email;

  return (
    <section className='profile'>
      <Header />
      <h1 className='profile__heading'>Привет, {userState.name}!</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__inputs'>
          <label className='profile__input-name'>Имя</label>
          <input
            className={`profile__input ${
              validationState.profile.errors.name && 'profile__input_error'
            }`}
            required
            type='text'
            name='name'
            onChange={handleChange}
            value={form.name}
            minLength={2}
          />
        </div>
        <div className='profile__inputs'>
          <label className='profile__input-name'>E-mail</label>
          <input
            className={`profile__input ${
              validationState.profile.errors.email && 'profile__input_error'
            }`}
            required
            type='email'
            name='email'
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <p
          className={`auth__error-message ${
            errorRequest && 'auth__error-message_active'
          }`}
        >
          {errorRequest}
        </p>
        <p
          className={`auth__error-message ${
            includesErrors && 'auth__error-message_active'
          }`}
        >
          {includesErrors}
        </p>

        <button
          className='profile__submitBtn-edit'
          type='submit'
          disabled={includesErrors || !isNewUserInfo}
        >
          Редактировать
        </button>
      </form>
      <Link to='/signin'>
        <button className='profile__submitBtn-logout' onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
}

export default Profile;
