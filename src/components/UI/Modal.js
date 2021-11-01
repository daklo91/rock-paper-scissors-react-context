import { Fragment } from "react";
import { createPortal } from "react-dom";
import CrossSVG from "../assets/icons/CrossSVG";
import classes from "./Modal.module.css";

function ModalContent() {
  return (
    <div className={classes.backdrop}>
      <section className={classes.modal}>
        <h2>RULES</h2>
        <div className={classes["close-button"]}>
          <button>
            <CrossSVG />
          </button>
        </div>
      </section>
    </div>
  );
}

const portalDestination = document.getElementById("overlays");

function Modal() {
  return (
    <Fragment>{createPortal(<ModalContent />, portalDestination)}</Fragment>
  );
}

export default Modal;
