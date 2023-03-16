import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from '../../assets/toast';

const UserEdit = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: currentUser._id,
    name: currentUser.name,
      alias: currentUser.alias,
      photo: currentUser.photo || ""
  });
  const handlerChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim().length < 3 || user.alias.trim().length < 3) {
      Toast.fire({
        icon: 'error',
        title: 'User and Alias must be at least 3 chars long!'
      })
      return;
    }
    axios.put("http://localhost:8000/api/users/"+user.id, {...user})
          .then((response) => {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            Toast.fire({
              icon: 'success',
              title: 'Successfully updated'
            })
            setTimeout(function(){navigate("/bright_ideas")},1500);
          }).catch((error) => {
            Toast.fire({
              icon: 'error',
              title: error
            })
            console.log(error)
          })
  }
  return (
    <div style={{backgroundColor:"#087990", border:"1px solid black", margin: "2.5rem 5rem"}}>
      <div className='card' style={{borderRadius: 0}}>
        <div className='card-header'>
          <h2>Edit Profile</h2>
        </div>
        <div className='card-body'>
          <form onSubmit={handlerSubmit}>
            <div className="row flex-column align-items-center mt-3 mb-3">
              <div className="col-md-10 mb-3 ">
                <span className="form-label left-label">Name</span>
                <input type="text" autoFocus name="name" className="form-control" onChange={handlerChange} value={user.name} />
              </div>
              <div className="col-md-10 mb-3 ">
                <span className="form-label left-label">Alias</span>
                <input type="text" name="alias" className="form-control" onChange={handlerChange} value={user.alias} />
              </div>
              <div className="col-md-10 mb-3 ">
                <span className="form-label left-label">Photo</span>
                <input type="text" name="photo" className="form-control" onChange={handlerChange} value={user.photo} />
              </div>
            </div>
            <input type="submit" className="btn btn-primary  btn-submit" value="Save changes" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserEdit;
