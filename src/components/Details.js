import classes from "./App.module.css"

export const Details =  () => {
    return ( <article>
    <div className={classes.name}>Imię Nazwisko Wiek</div>
    <div className={classes.city}>Miasto</div>
    </article>
    );
    
};