import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile(loggedIn) {
  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <h1 className='profile__heading'>Привет, Евгений!</h1>
      <form className='profile__form'>
        <div className='profile__inputs'>
          <label className='profile__input-name'>Имя</label>
          <input className='profile__input' required type='text' name='name' />
        </div>
        <div className='profile__inputs'>
          <label className='profile__input-name'>E-mail</label>
          <input className='profile__input' required type='text' name='email' />
        </div>
        <button className='profile__submitBtn-edit' type='submit'>
          Редактировать
        </button>
        <Link to='/signin'>
          <button className='profile__submitBtn-logout' type='submit'>
            Выйти из аккаунта
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Profile;
