import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InfoToolTipContext } from '../../contexts/infotooltip-context';
import { MovieContext } from '../../contexts/movie-context';
import { CurrentUserContext } from '../../contexts/user-context';
import { ValidationContext } from '../../contexts/validation-context';
import logo from '../../images/logo.svg';
import { errMessages } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import { checkValidation } from '../../utils/validation';
import InfoToolTip from '../InfoTooltip/InfoTooltip';
import Input from './Input';

function Login() {
  const { userState, setUserState } = useContext(CurrentUserContext);
  const { moviesState, setMoviesState } = useContext(MovieContext);
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const store = useContext(ValidationContext);
  const { validationState, setValidationState } = store;
  const [requestMessage, setRequestMessage] = useState('');

  const history = useHistory();

  const [disabledInput, setDisabledInput] = useState(false);

  const [form, setForm] = useState({ email: '', password: '' });

  const includesInputError = useMemo(
    () =>
      Object.values(validationState.login.errors).some(
        (errorMessage) => errorMessage,
      ),
    [validationState.login.errors],
  );

  function handleChange(e) {
    setRequestMessage('');
    const { newState } = checkValidation(e, 'login');
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getUser() {
    const moviesStorage = JSON.parse(localStorage.getItem('movies'));
    mainApi
      .getUserInfo()
      .then(({ _id, name, email }) => {
        setUserState({ ...userState, _id, name, email, loggedIn: true });
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: 'Вы успешно вошли',
          success: true,
        });
        if (moviesStorage) {
          setMoviesState(moviesStorage);
        }
      })
      .catch((err) => {
        setUserState({ ...userState, loggedIn: false });
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: 'Не удалось войти в аккаунт',
          success: false,
        });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabledInput(true);
    mainApi
      .login(form)
      .then((user) => {
        if (user.token) {
          getUser();
        }
      })
      .catch(({ status, message }) => {
        console.log(message);
        setRequestMessage(errMessages[status]);
      })
      .finally(() => {
        setDisabledInput(false);
      });
  }

  useEffect(() => {
    mainApi.getUserInfo().then((user) => {});

    if (userState.loggedIn) {
      history.push('/movies');
    }
  }, [userState.loggedIn]);

  const disabledButton =
    includesInputError ||
    disabledInput ||
    Object.values(form).some((input) => input === '');

  return (
    <section className='auth'>
      <Link className='auth__goHome' to='/'>
        <img
          className='header__logo header__logo_auth'
          src={logo}
          alt='Логотип'
        ></img>
      </Link>
      <h1 className='auth__heading'>Рады видеть!</h1>
      <form className='auth__form' onSubmit={handleSubmit}>
        <div className='auth__input-container'>
          <Input
            type='email'
            name='email'
            title='E-mail'
            onChange={handleChange}
            error={validationState.login.errors.email}
            disabled={disabledInput}
          />
          <Input
            type='password'
            name='password'
            title='Пароль'
            onChange={handleChange}
            error={validationState.login.errors.password}
            disabled={disabledInput}
          />
        </div>
        <p
          className={`auth__error-message ${
            requestMessage && 'auth__error-message_active'
          }`}
        >
          {requestMessage}
        </p>
        <button
          className={`auth__submitBtn auth__submitBtn_login ${
            disabledButton && 'auth__submitBtn_disabled'
          }`}
          type='submit'
          disabled={disabledButton}
        >
          Войти
        </button>
      </form>
      <div className='auth__redirect'>
        <p className='auth__redirect-text'>Еще не зарегистрированы?</p>
        <Link to='/signup' className='auth__redirect-link'>
          Регистрация
        </Link>
      </div>
      <InfoToolTip />
    </section>
  );
}

export default Login;
