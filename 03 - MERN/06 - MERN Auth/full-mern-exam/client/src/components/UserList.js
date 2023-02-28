import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get('/api/users', { withCredentials: true }, {
      withCredentials: true,
      credentials: 'include',
    })
      .then(response=>{
        setUsers(response.data);
    });
  };

  useEffect(()=>{
    loadUsers();
  },[])

  return (
    <>
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"># (for demo)</th> 
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx)=>
          ( <tr key={idx}>
              <th scope="row">{user._id}</th>
              <th scope="row">{user.name}</th>
              <th scope="row">{user.email}</th>
          </tr>))
          }
        </tbody>
      </table>
    </>
  )
}

export default UserList;