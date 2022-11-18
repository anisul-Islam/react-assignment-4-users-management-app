import React, { useEffect, useState } from 'react';

import Users from './components/Users';

// react-assignment-4-users-management-app

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw Error('User is Not Availble');
        } else {
          return res.json();
        }
      })
      .then((user) => {
        setUsers(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
