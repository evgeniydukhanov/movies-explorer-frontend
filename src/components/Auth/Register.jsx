import { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/user-context';
import { ValidationContext } from '../../contexts/validation-context';
import logo from '../../images/logo.svg';
import { errMessages } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import { checkValidation } from '../../utils/validation';
import InfoToolTip from '../InfoTooltip/InfoTooltip';
import Input from './Input';
import { InfoToolTipContext } from '../../contexts/infotooltip-context';

function Register() {
  const { userState } = useContext(CurrentUserContext);
  const store = useContext(ValidationContext);
  const { validationState, setValidationState } = store;
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const history = useHistory();

  const [requestMessage, setRequestMessage] = useState('');

  const [disabledInput, setDisabledInput] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const haveSomeError = useMemo(
    () =>
      Object.values(validationState.register.errors).some(
        (errorMessage) => errorMessage,
      ),
    [validationState.register.errors],
  );

  function handleChange(e) {
    setRequestMessage('');
    const { newState } = checkValidation(e, 'register');
    setValidationState(newState(validationState));
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabledInput(true);
    mainApi
      .registration(form)
      .then((user) => {
        setToolTipState({
          ...toolTipState,
          isOpen: true,
          message: 'Вы успешно зарегистрировались',
          success: true,
        });
        history.push('/signin');
      })
      .catch(({ status, message }) => {
        setRequestMessage(errMessages[status]);
        setDisabledInput(false);
      });
  }

  useEffect(() => {
    if (userState.loggedIn) history.push('/');
  }, []);

  const disabledButton =
    haveSomeError ||
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
      <h1 className='auth__heading'>Добро пожаловать!</h1>
      <form className='auth__form' onSubmit={handleSubmit}>
        <div className='auth__input-container'>
          <Input
            type='text'
            name='name'
            title='Имя'
            onChange={handleChange}
            error={validationState.register.errors.name}
            disabled={disabledInput}
          />
          <Input
            type='email'
            name='email'
            title='E-mail'
            onChange={handleChange}
            error={validationState.register.errors.email}
            disabled={disabledInput}
          />
          <Input
            type='password'
            name='password'
            title='Пароль'
            onChange={handleChange}
            error={validationState.register.errors.password}
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
          className={`auth__submitBtn ${
            disabledButton && 'auth__submitBtn_disabled'
          }`}
          type='submit'
          disabled={disabledButton}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='auth__redirect'>
        <p className='auth__redirect-text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='auth__redirect-link'>
          Войти
        </Link>
      </div>
      <InfoToolTip />
    </section>
  );
}

export default Register;
