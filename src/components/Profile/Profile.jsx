import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';


function Profile(loggedIn) {
  return (
   
    <section className="profile">
       <Header/>
      <h2 className="profile__heading">Привет, Евгений!</h2>
      <form className="profile__form">
        <p className='profile__input-name'>Имя</p>
      <input
          className="profile__input"
          required
          type="text"
          name="name"
        />


        <p className='profile__input-name'>E-mail</p>
        <input
          className="profile__input"
          required
          type="text"
          name="email"
        />

        <button className="profile__submitBtn" type="submit">
          Редактировать
        </button>
        <button className="profile__submitBtn" type="submit">
          Выйти из аккаунта
        </button>
      </form>
      <div className='profile__redirect'>
      <p className='profile__redirect-text'>Редактировать</p>
      <Link to="/signin" className="profile__redirect-link">
         Войти
      </Link>
      </div>
    </section>
  );
}

export default Profile;