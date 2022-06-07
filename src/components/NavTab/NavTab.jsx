import { React } from 'react';

function NavTab() {
  return (
    <nav>
      <div className='promo__links'>
        <a href='#about-project' className='promo__link'>
          О проекте
        </a>
        <a href='#techs' className='promo__link'>
          Технологии
        </a>
        <a href='#about-me' className='promo__link'>
          Студент
        </a>
      </div>
    </nav>
  );
}

export default NavTab;
