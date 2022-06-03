import React from 'react';
import Arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <a
            className='portfolio__link-item no-top-padding'
            href='https://github.com/evgeniydukhanov/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт{' '}
            <img
              className='portfolio__link-img'
              alt='Стрелка'
              src={Arrow}
            ></img>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='portfolio__link-item'
            href='https://github.com/evgeniydukhanov/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт{' '}
            <img
              className='portfolio__link-img'
              alt='Стрелка'
              src={Arrow}
            ></img>
          </a>
        </li>
        <li className='portfolio__link no-border '>
          <a
            className='portfolio__link-item no-bottom-padding' 
            href='https://github.com/evgeniydukhanov/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение{' '}
            <img
              className='portfolio__link-img'
              alt='Стрелка'
              src={Arrow}
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
