import React, {useState} from "react";

import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (not-empty values)."
            });
            return;

        }
        // The value which is entered in the input tag is string (This is default), so to be super safe, change the enteredAge to number
        if(+enteredAge < 1) {
            setError({
                title:"Invalid Age",
                message:"Please enter a valid age (>0)."
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    // Diminish the error model
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    {/* Set "value = {enteredUsername}" to resete the input  */}
                    <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    {/* Set "value={enteredAge}" to resete the input  */}
                    <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
                    <Button type="submit" onErrorHandler={errorHandler}>Add User</Button>
                </form>
            </Card>
        </div>

    )

}

export default AddUser;