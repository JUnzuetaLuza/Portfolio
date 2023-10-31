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
                        <b className={css.names}>React</b>
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"/>
                        <b className={css.names}>Redux</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                        <b className={css.names}>HTML</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                        <b className={css.names}>CSS</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                        <b className={css.names}>JavaScript</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"/>
                        <b className={css.names}>Bootstrap</b> 
                    </div>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Backend</h2>
                    <section className={css.techs}>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/>
                        <b className={css.names}>Node Js</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
                        <b className={css.names}>Express</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"/>
                        <b className={css.names}>PostgreSQL</b> 
                    </div>
                    </section>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Others</h2>
                    <section className={css.techs}>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"/>
                        <b className={css.names}>Photoshop</b> 
                    </div>
                    <div className={css.mini}>
                        <img className={css.icons} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                        <b className={css.names}>Git</b> 
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
}