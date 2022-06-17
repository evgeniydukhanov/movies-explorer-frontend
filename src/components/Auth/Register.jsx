import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import InfoToolTip from '../InfoTooltip/InfoTooltip';

function Register(props) {
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
      <form className='auth__form'>
        <p className='auth__input-name'>Имя</p>
        <input className='auth__input' required type='text' name='name' />
        <p className='auth__input-name'>E-mail</p>
        <input className='auth__input' required type='text' name='email' />
        <p className='auth__input-name'>Пароль</p>
        <input
          className='auth__input'
          required
          type='password'
          name='password'
          minLength='8'
          maxLength='16'
        />
        <button className='auth__submitBtn' type='submit'>
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
