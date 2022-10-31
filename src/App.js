import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states

  useEffect(() => {
    setIsLoading(true);
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => setUsers(data));

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      <Users users={users} />
    </div>
  );
};

export default App;
