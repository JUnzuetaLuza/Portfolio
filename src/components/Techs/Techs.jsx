import css from "./Techs.module.css";

export const Techs = () => {

    return (
        <section id="techsSec" className={css.container}>
            <h1 className={css.title}>Techs</h1>
            <div className={css.contFlex}>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Front-End</h2>
                    <section className={css.techs}>
                        <img id="React" title="React" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"/>
                        <img id="Redux" title="Redux" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"/>
                        <img id="HTML" title="HTML" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                        <img id="CSS" title="CSS" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                        <img id="JavaScript" title="JavaScript" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                        <img id="Bootstrap" title="Bootstrap" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"/>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Back-End</h2>
                    <section className={css.techs}>
                        <img id="Node.js" title="Node.js"className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/>
                        <img id="Express" title="Express" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
                        <img id="PostgreSQL" title="PostgreSQL" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"/>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Others</h2>
                    <section className={css.techs}>
                        <img id="Git" title="Git" className={css.icons} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                        <img id="Photoshop" title="Photoshop" className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"/>
                    </section>
                </div>
            </div>
        </section>
    )
}