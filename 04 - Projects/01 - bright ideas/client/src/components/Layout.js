import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { navBgColor, mainBgColor } from './Style';

const Layout =(props) =>{
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    axios.post('http://localhost:8000/api/logout')
    .then(response => {
      navigate('/');
    })
  }
  return(
    <>
      <div className="d-flex justify-content-between container-xs rounded p-3 mx-5 my-2" style={{backgroundColor:navBgColor, color:"white"}}>
        {<Link className="btn btn-primary btn-helper" to="/bright_ideas">Bright Ideas</Link>}
        {props.showLogout && 
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.alias}
            </button>
          
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/edit_profile" className="dropdown-item">Edit Profile</Link>
              <li><button className="dropdown-item" onClick={ logout }>Logout</button></li>
            </ul>
        </div>
        }
      </div>
				<div className='flex rounded mx-5 my-3' style={{backgroundColor:mainBgColor, border:"1px solid #444444", color: "#444444"}}>
        <main style={{width: "100%"}}>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;
