import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const navItems = loggedIn
    ? [
        { name: 'Фильмы', path: '/movies', className: '' },
        { name: 'Сохраненные фильмы', path: '/saved-movies', className: '' },
        { name: 'Аккаунт', path: '/profile', className: 'navigation__profile' },
      ]
    : [
        { name: 'Регистрация', path: 'signup', className: '' },
        { name: 'Войти', path: 'signin', className: 'navigation__login' },
      ];

  return (
    <nav className={`navigation ${loggedIn && 'navigation_logged'}`}>
      <button className='header__burger-close'></button>
      <ul className={`navigation__list `}>
        {navItems.map(({ name, path, className }, i) => (
          <li className='navigation__item' key={i}>
            <Link to={path} className={`navigation__link ${className}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
