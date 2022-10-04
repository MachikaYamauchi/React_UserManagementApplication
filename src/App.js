// RESPONSIBILITY -> Fetch data
import React, {useState, Fragment} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // Want to update the state by taking old lists and appending a new element to it
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id:Math.random().toString, name:uName, age:uAge}]
    });
  }


  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
