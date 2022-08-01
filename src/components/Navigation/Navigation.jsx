import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ loggedIn }) {
  const { pathname } = useLocation();

  const ref = useRef(null);

  function handleOpenMenu() {
    const menu = ref.current;
    if (loggedIn) {
      menu.classList.add('navigation_logged_active');
    }
  }

  function handleCloseMenu() {
    const menu = ref.current;
    if (loggedIn) {
      menu.classList.remove('navigation_logged_active');
    }
  }

  const navItems = loggedIn
    ? [
        {
          name: 'Главная',
          path: '/',
          classNameItem: 'navigation__item-main',
          classNameLink: '',
        },
        { name: 'Фильмы', path: '/movies', classNameItem: '' },
        {
          name: 'Сохраненные фильмы',
          path: '/saved-movies',
          classNameItem: '',
          classNameLink: '',
        },
        {
          name: 'Аккаунт',
          path: '/profile',
          classNameItem: '',
          classNameLink: 'navigation__profile',
        },
      ]
    : [
        {
          name: 'Регистрация',
          path: '/signup',
          classNameItem: '',
          classNameLink: '',
        },
        {
          name: 'Войти',
          path: '/signin',
          classNameItem: 'navigation__login',
          classNameLink: '',
        },
      ];

  return (
    <>
      {loggedIn && (
        <div className='navigation__burger' onClick={handleOpenMenu}>
          <div className='navigation__burger-line'></div>
          <div className='navigation__burger-line'></div>
          <div className='navigation__burger-line'></div>
        </div>
      )}
      <nav
        className={`navigation ${loggedIn && 'navigation_logged'}`}
        ref={ref}
      >
        <button
          className='navigation__burger-close'
          onClick={handleCloseMenu}
        ></button>
        <ul
          className={`navigation__list ${
            loggedIn && 'navigation__list_logged'
          }`}
        >
          {navItems.map(({ name, path, classNameLink, classNameItem }, i) => (
            <li
              className={`navigation__item ${classNameItem} ${
                pathname === path && 'navigation__item_select'
              }`}
              key={i}
            >
              <Link to={path} className={`navigation__link ${classNameLink}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
