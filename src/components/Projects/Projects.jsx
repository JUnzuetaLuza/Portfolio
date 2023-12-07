import ratPic from "../../assets/ratge.png";
import greenscreenPic from "../../assets/greenscreen.png";
import css from "./Projects.module.css";
import { Card } from '../../components/Card/Card';
import { Carousel } from "react-bootstrap";

export const Projects = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Projects</h1>
            <Carousel pause='hover' interval={5000}>
            {
                projectsData.map((data) => {
                    return (
                        <Carousel.Item>
                            <Card 
                                name={data.name} 
                                img={data.img} 
                                skills={data.skills}/>
                        </Carousel.Item>
                    )
                })
            }
            </Carousel>
        </div>
    )
}

const projectsData = [
    {
        name: 'GreenScreen',
        img: greenscreenPic,
        skills: ['JavaScript', 'ReactJS', 'Redux', 'Node.js', 'PostgreSQL', 'REST API']
    },
    {
        name: 'Rat-Do',
        img: ratPic,
        skills: ['Work in progress']
    }
]