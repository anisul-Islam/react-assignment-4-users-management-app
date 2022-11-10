import React, { useEffect, useState } from 'react';
import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState('');

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setisLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setusers(data);
        setisLoading(false);
      } catch (error) {
        seterror(error.message);
        setisLoading(false);
      }
    };

    fetchUser();

    return fetchUser;
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {!error && !isLoading && <Users users={users} />}
    </div>
  );
};

export default App;
