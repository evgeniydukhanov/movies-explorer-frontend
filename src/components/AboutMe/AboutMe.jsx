import React, { forwardRef } from 'react';
import avatar from '../../images/avatar.jpg';

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className='about-me' id='about-me' ref={ref}>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__info-block'>
          <h3 className='about-me__name'>Евгений</h3>
          <p className='about-me__profession'>Бухгалтер-моделировщик, 27 лет</p>
          <p className='about-me__description'>
            Родился в Барнауле, после ВУЗа переехал в Новосибирск в поисках
            лучшей жизни. Работаю в ОАО "РЖД", занимаю должность ведущего
            бухгалтера и занимаюсь моделированием бизнес процессов.
          </p>
          <ul className='about-me__links'>
            <li>
              <a
                className='about-me__link'
                href='https://vk.com/'
                target='_blank'
                rel='noreferrer'
              >
                VK
              </a>
            </li>
            <li>
              <a
                className='about-me__link'
                href='https://github.com/evgeniydukhanov'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='about-me__avatar-block'>
          <img className='about-me__avatar' src={avatar} alt='аватар'></img>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
