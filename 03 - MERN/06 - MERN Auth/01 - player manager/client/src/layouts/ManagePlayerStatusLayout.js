import React from 'react';
import { Link } from 'react-router-dom';

const ManagePlayerStatusLayout =(props) =>{
  const gameIds = Array.from(Array(props.gameCount).keys()).map(id => id+1);
  
  return(
    <>
      <div style={{display: "flex", fontSize: 30, justifyContent: "center", margin: "10px 2rem"}}>
        {gameIds.map((id, index, row) => (
          <div key={id} style={{display: "inline-flex"}}>
            <Link className={props.location.pathname === `/status/game/${id}` ? "active-link" : ""} to={`/status/game/${id}`}>Game {id} </Link> {(index+1 !== row.length) && <div className="vl"></div>}
          </div>
        ))}
      </div>
      <div style={{border:"1px solid black", margin: "10px 2rem"}}>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default ManagePlayerStatusLayout;