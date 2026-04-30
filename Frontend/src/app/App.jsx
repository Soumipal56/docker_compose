import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users')
    .then(response=>{
      setUsers(response.data.users)
    })
  }, [])

  return (
    <div className='app'>
      <h1>Users</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App