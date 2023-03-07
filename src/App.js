import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (!res.ok) {
            throw Error('Error is successfully found');
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, 2000);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <Users users={users} />
    </div>
  );
};

export default App;
