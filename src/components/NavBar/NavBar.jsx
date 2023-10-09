import css from './NavBar.module.css';

export const NavBar = () => {
    return (
        <>
        <div className={css.container}>
            <div className={css.rightSide}>
                <h1>José Unzueta</h1>
            </div>
            <div className={css.middleSide}>
                <button className={css.buttonNav}>About</button>
                <button className={css.buttonNav}>Skills</button>
                <button className={css.buttonNav}>Projects</button>
            </div>
            <div className={css.rightSide}>
                <button className={css.buttonLink}>LI</button>
                <button className={css.buttonLink}>GH</button>
                <button className={css.buttonLink}>CV</button>
            </div>
        </div>
        </>
    )
}