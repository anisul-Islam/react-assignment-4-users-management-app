import React, { useState, useEffect } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [ users, setUsers ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if ( !res.ok ) {
          throw Error('Error fetching users.')
        }
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
