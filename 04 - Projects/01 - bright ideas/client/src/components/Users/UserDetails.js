import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultAvatar from'../../assets/avatar.png';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if(id) {
      axios.get('http://localhost:8000/api/users/' + id)
        .then(res => {
          const response = res.data;
          const newUser = response;
          setUser(newUser)
        })
    }
  }, [id])

  return (
    <div className="row d-flex justify-content-center mt-3 mb-3">
      <div key={user._id} className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0" align="left">
            <div className="card-body">
            <h2 className="card-title mb-3" align="center"><img src={user?.photo || defaultAvatar} style={{height:"50px", marginRight:"10px", width: "50px"}} className="img-fluid img-thumbnail" alt="perfil"/>{user.alias}</h2>
            
              <h4>Name: {user.name}</h4>
              <h4>Email: {user.email}</h4>
              ---------------------
              <h5>Total Number of posts: {user.postCount}</h5>
              <h5>Total Number of likes: {user.likesCount}</h5>
          </div>
        </div>
      </div>
    </div>
  )
};
export default UserDetails;
