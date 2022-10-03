import React from "react";

import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onErrorHandler}/> {/* Set this backdrop in order no to enter the inputs when the error model apperes */}
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onErrorHandler}>Okay</Button>
                </footer>
            </Card>
        </div>

    )

}

export default ErrorModal;