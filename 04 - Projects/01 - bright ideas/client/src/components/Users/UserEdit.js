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
        photo: currentUser.photo == undefined ? "" : currentUser.photo
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
            alert("los datos deben de ser más extensos");
            return;
        }
        axios.put("http://localhost:8000/api/edituser", user)
            .then((response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                Toast.fire({
                    icon: 'success',
                    title: 'Successful change'
                  })
                setTimeout(function(){navigate("/bright_ideas")},1500);
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='card'>
            <div className='card-header'>
                <h2>Edit User</h2>
            </div>
            <div className='card-body'>
                <form onSubmit={handlerSubmit}>
                    <div className="col-md-12 mb-3 ">
                        <span className="form-label left-label">Name</span>
                        <input type="text" autoFocus name="name" className="form-control" onChange={handlerChange} value={user.name} />
                    </div>
                    <div className="col-md-12 mb-3 ">
                        <span className="form-label left-label">Alias</span>
                        <input type="text" name="alias" className="form-control" onChange={handlerChange} value={user.alias} />
                    </div>
                    <div className="col-md-12 mb-3 ">
                        <span className="form-label left-label">Photo</span>
                        <input type="text" name="photo" className="form-control" onChange={handlerChange} value={user.photo} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <input type="submit" className="btn btn-primary" value="Save changes" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserEdit