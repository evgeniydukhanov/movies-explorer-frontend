import React, { forwardRef } from 'react';

const AboutProject = forwardRef((props, ref) => {
  return (
    <section className='about-project' id='about-project' ref={ref}>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__info'>
        <li>
          <h3 className='about-project__info-heading'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className='about-project__info-heading'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__duration'>
        <p className='about-project__duration-backend'>1 неделя</p>
        <p className='about-project__duration-frontend'>4 недели </p>
      </div>
      <div className='about-project__duration no-top-margin'>
        <p className='about-project__duration-backend_caption'>Back-end</p>
        <p className='about-project__duration-frontend_caption'>Front-end</p>
      </div>
    </section>
  );
});

export default AboutProject;
