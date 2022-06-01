import React from 'react';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt ='Логотип'></img>
            </Link>
            {/* <Link to='/sign-up'>
                Регистрация
            </Link>
            <Link to='/sign-in'>
                Войти
            </Link> */}
        </header>
    )
}

export default Header;