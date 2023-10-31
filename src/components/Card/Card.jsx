import css from './Card.module.css';
import pic from "../../assets/ratge.png";

export const Card = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>GreenScreen</h2>
            <img src={pic}/>
        </div>
    )
}

const projectsData = [
    {
        name: 'GreenScreen',
        img: pic,
        skills: ['JavaScript', 'HTML', 'CSS', 'ReactJS', 'Redux', 'Node.js', 'PostgreSQL', 'REST API']
    }
]