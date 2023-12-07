import css from "./About.module.css";
import pic from "../../assets/ratge.png";
import { useMediaQuery } from 'react-responsive';

export const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={css.container}>
            <div className={css.leftAbout}>
                <h1 className={css.title}>José Unzueta</h1>
                <h2 className={css.subtitle}>Full Stack Developer</h2>
                <br/>
                <span className={css.text}>I'm a passionate full stack web developer with experience in a variety of technologies. My goal is to continue learning and growing in this exciting industry while contributing to the development of innovative solutions. I am committed to excellence and continuous improvement, and am excited about the opportunities this ever-evolving industry has to offer. I am always willing to take on new challenges and am eager to contribute to projects that require a creative mind and solid technical skills.</span>
            </div>
            <div className={css.rightAbout}>
                <img className={css.imgProfile} src={pic}/>
            </div>
            
        </div>
    )
}