import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>ROCK PAPER SCISSORS</h1>
      <div className={classes.score}>
        <span className={classes.score__text}>SCORE</span>
        <span className={classes.score__number}>12</span>
      </div>
    </header>
  );
}

export default Header;
