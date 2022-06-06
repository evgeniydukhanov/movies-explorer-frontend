import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='header__auth'>
      <Link to='/signup'>Регистрация</Link>
      <Link to='/signin'>Войти</Link>
    </div>
  );
}

export default Navigation;
