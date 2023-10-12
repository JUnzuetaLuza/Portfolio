import css from "./Techs.module.css";
import pic from "../../assets/ratge.png";

export const Techs = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Skills</h1>
            <div className={css.contGrid}>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Frontend</h2>
                </div>
                <div className={css.techSpace}>
                    <h2 className={css.subtitle}>Backend</h2>
                </div>
                <div className={css.techSpaceCenter}>
                    <h2 className={css.subtitle}>Others</h2>
                </div>
            </div>
        </div>
    )
}