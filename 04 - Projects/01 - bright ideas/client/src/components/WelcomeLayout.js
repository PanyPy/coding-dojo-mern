import React from 'react'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';

const Layout =(props) =>{

  return(
    <>
      <div style={{backgroundColor:"#0d6efd", color:"white", height: "50px", margin: "0px  5rem"}}>
        <h2>Welcome to Bright Ideas</h2>
      </div>
      <div className='d-flex' style={{backgroundColor:"#087990", border:"1px solid black", margin: "0px 5rem"}}>
        <SignUp />
        <Login />
      </div>
    </>
  )
}

export default Layout;