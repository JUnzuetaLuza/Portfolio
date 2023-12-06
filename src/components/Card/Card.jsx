import css from './Card.module.css';

export const Card = (props) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>{props.name}</h2>
            <img src={props.img} className={css.image}/>
            <div className={css.skillsCont}>
                {props.skills.map((skill, index) => (
                    <span key={index}>
                        {skill}
                        {index < props.skills.length - 1 ? '-' : ''}
                    </span>
                ))}
            </div>
        </div>
    )
}
