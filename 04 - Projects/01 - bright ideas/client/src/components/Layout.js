import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { navBgColor, mainBgColor } from './Style';
import Button from 'react-bootstrap/Button';

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
      <div className="container-xs rounded p-3 mx-5 my-2" style={{backgroundColor:navBgColor, color:"white"}}>
        <h3 className='text-start'>{currentUser && `${currentUser.name}`}</h3>
        <Link style={{}} className="btn btn-primary btn-helper" to="/bright_ideas">Bright Ideas</Link>
        {props.showLogout && <Button className='btn btn-light btn-logout' onClick={ logout }>Logout</Button>}
      </div>
      <div className='flex rounded mx-5 my-3' style={{backgroundColor:mainBgColor, border:"1px solid #444444", color: "#444444"}}>
			<h3 className='text-center m-2 text-light fs-2'>{props.title}</h3>
        <main className="p-3" style={{width: "100%"}}>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;
