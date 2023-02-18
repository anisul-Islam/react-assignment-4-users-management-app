/* eslint-disable */
import React,{useState,useEffect} from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const[users, setUsers]=useState(null);
  const[isLoading, setLoading]=useState(true);
  const[error, setError]=useState(null);
  
  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      if (!res.ok) {
        throw new Error('Data is not loading!')
      } else {
        return res.json();
      }
    })
    .then((res)=>{
      setUsers(res)
      setLoading(false)
    }).catch((error)=>{
      setError(error.message)
      setLoading(false)
    })
  },[])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p style={{color:'yellow'}}>Loading users...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {users && <Users users={users}/>}
    </div>
  );
};

export default App;
