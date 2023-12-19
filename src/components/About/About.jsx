import css from "./About.module.css";
import pic from "../../assets/ratge.png";

export const About = () => {
    return (
        <div className={css.container}>
            <div className={css.leftAbout}>
                <h2 className={css.subtitle}>Hi, i'm José Unzueta</h2>
                <h1 className={css.title}>Full Stack Developer</h1>
                <br/>
                <h3 className={css.text}>Lets make your dream web</h3>
            </div>
            <img className={css.imgProfile} src={pic}/>
        </div>
    )
}