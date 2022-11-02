/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Users from './components/Users';

// import Users from './components/Users';

const App = () => {
  const [users, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErro] = useState(null)
  // step1 : declare three states here : users, isLoading, error

  // step2 : use useEffect for fetching the data including updating isLoading and error states
     
  useEffect(() => {

  
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if(!res.ok){
          throw Error ("Fecting is not successful")
        }else{
          return res.json()
        }
      
  
      })
      .then(data => {
        setUser(data)
        setIsLoading(false)
        setErro(null)
      })
      .catch((error) => {
        setUser([])
        setIsLoading(false)
        setErro(error.message)
        
      })

   
 

  },[])
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {users.length > 1 && <Users users={users} />}

    </div>
  );
};

export default App;
