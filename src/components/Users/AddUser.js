import React, {useState} from "react";

import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUsername, setEnteredusername] = useState("");
    const [age, setAge] = useState(0);

    const inputUser = (event) => {
        setEnteredusername(event.target.value);
    }

    const inputAge = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.length > 0 && age.length > 0) {
            let userInfo = {
                userName:enteredUsername,
                age:age
            }
        }
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" onchange={inputUser} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" onchange={inputAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;