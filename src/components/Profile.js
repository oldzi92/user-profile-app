import classes from "./App.module.css";
import { Logo } from "./Logo";

export const Profile = () => {
  return (
    <article className={classes.background}>

      <div className={classes.container1}>
        <div className={classes.container2}></div>
      </div>
      <Logo />
    </article>
  );
};
