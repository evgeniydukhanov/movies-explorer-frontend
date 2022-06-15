import React, { forwardRef } from 'react';

const Techs = forwardRef((props, ref) => {
  return (
    <section className='techs' id='techs' ref={ref}>
      <h2 className='about-techs__title'>Технологии</h2>
      <h3 className='techs__info'>7 Технологий</h3>
      <p className='techs__maintext'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='promo__links_techs'>
        <li className='promo__link_techs'>HTML</li>
        <li className='promo__link_techs'>CSS</li>
        <li className='promo__link_techs'>JS</li>
        <li className='promo__link_techs'>React</li>
        <li className='promo__link_techs'>Git</li>
        <li className='promo__link_techs'>Express.js</li>
        <li className='promo__link_techs'>mongoDB</li>
      </ul>
    </section>
  );
});

export default Techs;
