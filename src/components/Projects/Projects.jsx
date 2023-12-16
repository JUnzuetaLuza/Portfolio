import ratPic from "../../assets/ratge.png";
import greenscreenPic from "../../assets/greenscreen.png";
import css from "./Projects.module.css";
import { Card } from '../../components/Card/Card';
import { Carousel } from "react-bootstrap";

export const Projects = () => {
    return (
        <>
        <h2 className={css.title}>Projects</h2>
        <div className={css.container}>
            {
                projectsData.map((data) => {
                    return (
                        <Card 
                            name={data.name} 
                            img={data.img} 
                            skills={data.skills}/>
                    )
                })
            }
        </div>
        </>
    )
}

const projectsData = [
    {
        name: 'GreenScreen',
        img: greenscreenPic,
        skills: ['JavaScript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'REST API']
    },
    {
        name: 'Videogames',
        img: ratPic,
        skills: ['JavaScript, React', 'Redux', 'Sequilize', 'PostgreSQL', 'REST API']
    },
    {
        name: 'ErrorPage',
        img: ratPic,
        skills: ['Work in progress']
    },
    {
        name: 'Rat-Do',
        img: ratPic,
        skills: ['Work in progress']
    }
]