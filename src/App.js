/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState(null);
  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw Error('Data Fetching Not Successfull');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setTimeout(() => {
          setDataFetched(true);
        }, 1);
        setInterval(() => {
          setDataFetched(false);
        }, 3000);

        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        setDataFetched(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p className="loadingUser">Loading users...</p>}
      {dataFetched && <p className="dataFetchingMessage">Data Fetching Successfull</p>}
      {error && <p className='dataFetchingErrorMessage'>{error}</p>}
      <Users users={users} />
    </div>
  );
};

export default App;
