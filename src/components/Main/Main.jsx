import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import './Main.css';

function Main(){
    return(
        <main className='content'>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        </main>
    )
}

export default Main;