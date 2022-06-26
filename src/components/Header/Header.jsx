import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/user-context';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const { userState } = useContext(CurrentUserContext);

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='Логотип' />
      </Link>

      <Navigation loggedIn={userState.loggedIn} />
    </header>
  );
}

export default Header;
