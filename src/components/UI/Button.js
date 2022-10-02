import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // if the props.type is undefined, this button type will be used as fallback
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
