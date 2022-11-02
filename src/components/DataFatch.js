/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

const DataFatch = () => {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
      
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            return res.json()
        } )
        .then((dat) => {
            setTodos(dat)
            
        } )

    }, [])
  return (
    <div>DataFatch
        { todos &&
            todos.map((todo) => {
                return <p key={todo.id}> {todo.title}</p>
            })
        }
    </div>
  )
}

export default DataFatch