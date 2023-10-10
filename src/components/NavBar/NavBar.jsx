import css from './NavBar.module.css';
import linkedinLogo from "../../assets/linkedin-logo.png";
import githubLogo from "../../assets/github-logo.png";
import cvLogo from "../../assets/cv-logo.png";

export const NavBar = () => {
    return (
        <>
        <div className={css.container}>
            <div className={css.rightSide}>
                <h1 className={css.mainLogo}>José Unzueta</h1>
            </div>
            <div className={css.middleSide}>
                <button className={css.buttonNav} href="#about">About</button>
                <button className={css.buttonNav} href="#skills">Skills</button>
                <button className={css.buttonNav} href="#projects">Projects</button>
            </div>
            <div className={css.rightSide}>
                <a href='https://www.linkedin.com/in/jos%C3%A9-unzueta-21689126a/'><img className={css.imgsNav} src={linkedinLogo}/></a>
                <a href='https://github.com/JUnzuetaLuza'><img className={css.imgsNav} src={githubLogo}/></a>
                <a href='../../assets/CV - English.pdf' download><img className={css.imgsNav} src={cvLogo}/></a>
            </div>
        </div>
        </>
    )
}