import { NavBar } from '../../components/NavBar/NavBar';
import { About } from '../../components/About/About';
import { Techs } from '../../components/Techs/Techs';
import { Projects } from '../../components/Projects/Projects';
import css from './Home.module.css';
import React from 'react';

export const Home = () => {
    return (
        <div className={css.container}>
        <NavBar/>
        <section id="aboutSec"><About/></section>
        <section id="techsSec"><Techs/></section>
        <section id="projectsSec"><Projects/></section>
        </div>
    )
}