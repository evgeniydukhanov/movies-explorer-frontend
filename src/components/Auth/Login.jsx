import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='auth'>
      <img
        className='header__logo header__logo_auth'
        src={logo}
        alt='Логотип'
      ></img>
      <h2 className='auth__heading'>Рады видеть!</h2>
      <form className='auth__form'>
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
        <button className='auth__submitBtn auth__submitBtn_login' type='submit'>
          Войти
        </button>
      </form>
      <div className='auth__redirect'>
        <p className='auth__redirect-text'>Еще не зарегистрированы?</p>
        <Link to='/signup' className='auth__redirect-link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
