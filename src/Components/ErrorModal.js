import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick} />

      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.header}</h2>
        </header>

        <div className={classes.body}>
          <p>{props.body}</p>
        </div>

        <footer className={classes.footer}>
          <button onClick={props.onClick}>
            <b>Okay </b>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
