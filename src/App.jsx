import React, { useEffect, useState } from "react";

import Users from "./components/Users";

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(users);

  // step2 : use useEffect for fetching the data including updating isLoading and error

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not loaded successfully");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not loaded successfully");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  // const error = { error };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}

      {!isLoading && !error && <Users users={users} />}

      {/* <Users users={users} /> */}
    </div>
  );
};

export default App;
