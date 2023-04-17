import React, { useState, Fragment } from "react";

import AppUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AppUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
