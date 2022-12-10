import React, { useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useState(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if(!res.ok){
        throw Error("Data is not fetching")
      }else{
        return res.json()
      }
    })
    .then((data) => {
      setUsers(data)
      setIsLoading(false)
      setError(null)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])
  
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
