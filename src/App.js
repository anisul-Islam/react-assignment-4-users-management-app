import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      if(!res.ok){
        throw Error('User not found');
      }
      return res.json()
    })
    .then((data) => {
      setUser(data)
      setIsLoading(false)
    })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false)
    })
},[])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {users && <Users users={users}/> }
    </div>
  );
};

export default App;
