import css from "./Projects.module.css";
import pic from "../../assets/ratge.png";

export const Projects = () => {
    return (
        <div className={css.container}>
            <h1>Projects</h1>
            <div className={css.contProj}>
                <img className={css.imgProfile} src={pic}/>
            </div>
        </div>
    )
}