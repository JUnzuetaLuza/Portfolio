import css from "./Techs.module.css";

export const Techs = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Skills</h1>
            <div className={css.contFlex}>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Frontend</h2>
                    <section className={css.techs}>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"/>
                        <a className={css.names}>React</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"/>
                        <a className={css.names}>Redux</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                        <a className={css.names}>HTML</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                        <a className={css.names}>CSS</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                        <a className={css.names}>JavaScript</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"/>
                        <a className={css.names}>Bootstrap</a>
                    </div>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Backend</h2>
                    <section className={css.techs}>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/>
                        <a className={css.names}>Node Js</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
                        <a className={css.names}>Express</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"/>
                        <a className={css.names}>PostgreSQL</a>
                    </div>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Others</h2>
                    <section className={css.techs}>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"/>
                        <a className={css.names}>Photoshop</a>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                        <a className={css.names}>Git</a>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
}