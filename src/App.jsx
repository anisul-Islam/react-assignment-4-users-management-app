import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [isLoading,setIsLoading] = useState(true)
  const [users,setUsers] = useState([])
  const [error,setError] = useState('')



  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(()=>{
    async function fetchedUsers(){
      try{
        setIsLoading(true)
        setError('')
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersData = await userResponse.json()
        setUsers(usersData)
        setIsLoading(false)
      }catch{
        setIsLoading(false)
        setError('There was an problem!')
      }
    }
    fetchedUsers()
  },[])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      <Users users={users}/>
    </div>
  );
};

export default App;
