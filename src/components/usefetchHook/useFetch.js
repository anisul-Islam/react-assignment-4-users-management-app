import {useState,useEffect} from 'react'

const UseFetch = (url) => {
    const [users,setUsers]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
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
            .then((users)=>{
                setUsers(users); 
                console.log("hello")
                setIsLoading(false)
            })
            .catch((err)=>{
                setError(err.message)
                setIsLoading(false)
                
            })
         },5000)
    }, [url]);
    console.log(users)

    return {users,isLoading,error}


}

export default UseFetch