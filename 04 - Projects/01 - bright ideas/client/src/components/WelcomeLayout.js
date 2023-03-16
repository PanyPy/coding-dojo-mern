import React from 'react'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import { navBgColor, mainBgColor } from './Style';
import einsteinquote from "../einsteinquote.png";

const Layout =(props) =>{

  return(
    <>
      <div className="flex m-3 p-1 rounded" style={{backgroundColor:mainBgColor, color:"white"}}>
        <h2 className="my-3">Welcome to Bright Ideas</h2>
      </div>
			<img className="rounded img-fluid" style={{maxWidth: "60%", height: "auto"}} src={einsteinquote}/>
      <div className='d-flex rounded m-3' style={{backgroundColor:navBgColor, border:"1px solid black", margin: "0px 5rem"}}>
        <SignUp />
        <Login />
      </div>
    </>
  )
}

export default Layout;
