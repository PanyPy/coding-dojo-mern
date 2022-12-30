import React from 'react';
import { Link } from 'react-router-dom';

const ManagePlayersLayout =(props) =>{
  const activePlayers = props.location.pathname.includes("/players/list");
  const activeAddPlayer = props.location.pathname.includes("players/addplayer");

  return(
    <>
      <div  style={{display: "flex", fontSize: 30, margin: "10px 2rem"}}>
        <Link className={activePlayers ? "active-link" : ""} to="/players/list">List Players</Link>{" | "} 
        <Link className={activeAddPlayer ? "active-link" : ""} to="/players/addplayer">Add Player</Link>
      </div>
      <div style={{border:"1px solid black", margin: "10px 2rem"}}>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default ManagePlayersLayout;