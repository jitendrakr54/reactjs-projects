import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"} // "button" as fallback if no type passed
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
