import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Layout =(props) =>{
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    axios.post('http://localhost:8000/api/logout')
    .then(response=>{
      navigate('/');
    })
  }
  return(
    <>
      <div style={{backgroundColor:"#0d6efd", color:"white", height: "50px", margin: "0px  5rem"}}>
        <h3 style={{paddingTop: 5}} className='helper-left'>{currentUser && `Hi ${currentUser.name}!`}</h3>
        <h3 style={{paddingTop: 5}}>{props.title}</h3>
        {<Link style={{}} className="btn btn-primary btn-helper" to="/bright_ideas">Bright Ideas</Link>}
        {props.showLogout && <button className='btn btn-light btn-logout' onClick={ logout }>Logout</button>}
      </div>
      <div className='d-flex' style={{backgroundColor:"#afdee7", border:"1px solid black", margin: "0px 5rem"}}>
        <main style={{width: "100%"}}>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;