import classes from "./Footer.module.css";
import Modal from "../UI/Modal";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Modal />
      <button className={classes.button}>RULES</button>
    </footer>
  );
}

export default Footer;
