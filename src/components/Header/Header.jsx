import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='Логотип' />
      </Link>

      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
