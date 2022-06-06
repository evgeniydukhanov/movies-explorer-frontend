import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const [burgerActivate, setActiveBurger] = useState(false);

  function toggleBurger(e) {
    setActiveBurger(!burgerActivate);
  }
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип'></img>
      </Link>
      {
        loggedIn ? (
          <>
            <div
              className={`${
                burgerActivate
                  ? 'header__authorized-user_active'
                  : 'header__authorized-user'
              }    `}
            >
              <div className='header__authorized-list'>
                <button
                  className='header__closeBtn'
                  onClick={toggleBurger}
                ></button>
                <Link to='/' className='header__authorized-link'>
                  Главная
                </Link>
                <Link
                  className='header__authorized-link header__authorized-link_active'
                  to='/movies'
                >
                  Фильмы
                </Link>
                <Link className='header__authorized-link' to='/saved-movies'>
                  Сохраненные фильмы
                </Link>
                <Link to='profile' className='header__authorized-link'>
                  Аккаунт
                </Link>
              </div>
            </div>

            <button
              onClick={toggleBurger}
              className='header__burgerBtn'
            ></button>
          </>
        ) : (
          <Navigation />
        )
        // <div className='header__auth'>

        //     <Link to='/signup'>
        //         Регистрация
        //     </Link>
        //     <Link to='/signin'>
        //         Войти
        //     </Link>
        // </div>
      }
    </header>
  );
}

export default Header;
