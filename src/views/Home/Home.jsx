import { NavBar } from '../../components/NavBar/NavBar';
import { About } from '../../components/About/About';
import { Techs } from '../../components/Techs/Techs';
import { Projects } from '../../components/Projects/Projects';
import css from './Home.module.css';

export const Home = () => {
    return (
        <>
        <NavBar/>
        <About/>
        <Techs/>
        <Projects/>
        </>
    )
}