import React  from 'react';


import Users from './components/Users';
import UseFetch from './components/usefetchHook/useFetch';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
 const {users,isLoading,error}=UseFetch('https://jsonplaceholder.typicode.com/users')
console.log(users)
 

  // step2 : use useEffect for fetching the data including updating isLoading and error states

  return (
    <div className="container">
      <h1>hello</h1>
      <p>hi</p>
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {users && <Users usersData={users} />}
     
    </div>
  );
};

export default App;
