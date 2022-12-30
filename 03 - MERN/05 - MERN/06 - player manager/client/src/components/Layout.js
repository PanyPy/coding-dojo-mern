import React from 'react';
import { Link } from 'react-router-dom';

const Layout =(props) =>{
  const activePlayers = props.location.pathname.includes("/players/");
  const activeStatus = props.location.pathname.includes("/status/");

  return(
    <>
      <div style={{display: "flex", fontSize: 25, margin: "20px 5rem"}}>
        <Link className={activePlayers ? "active-link" : ""} to="/players/list">Manage Players</Link>
        <div className="vl"></div>
        <Link className={activeStatus ? "active-link" : ""} to="/status/game/1">Manage Player Status</Link>
      </div>
      <div style={{border:"1px solid black", margin: "20px 5rem"}}>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;