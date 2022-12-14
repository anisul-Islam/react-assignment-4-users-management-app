import React,{useState,useEffect}  from 'react';


import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users,setUsers]=useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]=useState(null)

  useEffect(() => {
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {
            if(!res.ok)
                {
                    throw new Error("problem fetching Users")
                }
            return res.json()
        })
        .then((data)=>{
            setUsers(data); 
            console.log("hello")
            setIsLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setIsLoading(false)
            
        })
     },5000)
}, []);

  console.log(users)

  // step2 : use useEffect for fetching the data including updating isLoading and error states

  return (
    <div className="container">
      <h1>hello</h1>
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <Users  />
     
    </div>
  );
};

export default App;
