import React from "react";

import Users from "./components/Users";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUser] = useState(null);
  const [isLoading, setIsLodding] = useState(true);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("data in not Found");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUser(data);
        setIsLodding(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLodding(false);
        setUser(null);
      });
  });
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {
        /* step3 : pass the users data to Users component  */
        users && <Users users={users} />
      }
    </div>
  );
};

export default App;
