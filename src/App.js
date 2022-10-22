import React from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error

  // step2 : use useEffect for fetching the data including updating isLoading and error states

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
    </div>
  );
};

export default App;
