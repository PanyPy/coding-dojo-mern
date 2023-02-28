import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Layout =(props) =>{
  const navigate = useNavigate();

  const logout = () => {
    axios.post('/api/logout')
    .then(response=>{
      console.log(response)
      navigate('/login');
    })
  }

  return(
    <>
      <div className='position-relative' style={{margin: "20px 5rem"}}>
        <button className='btn btn-primary position-absolute top-0 end-0' onClick={ logout }>Logout</button>
      </div>
      <div style={{border:"1px solid black", margin: "20px 5rem"}}>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;