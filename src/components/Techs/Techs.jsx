import css from "./Techs.module.css";
import pic from "../../assets/ratge.png";

export const Techs = () => {
    return (
        <div className={css.container}>
            <h1>Skills</h1>
            <div className={css.contGrid}>
                <div className={css.techSpace}>
                    <h2>Skills</h2>
                </div>
                <div className={css.techSpace}>
                    <h2>Skills</h2>
                </div>
                <div className={css.techSpaceCenter}>
                    <h2>Skills</h2>
                </div>
            </div>
        </div>
    )
}