import React from 'react';

function Footer() {
  return (
    <section className='footer'>
      <p className='footer__info'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright'>
        <p className='footer__date'>{`© ${new Date().getFullYear()}`}</p>
        <ul className='footer__links'>
          <li>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
            <a
              className='footer__link'
              href='https://github.com/Yandex-Practicum'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='footer__link'
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
