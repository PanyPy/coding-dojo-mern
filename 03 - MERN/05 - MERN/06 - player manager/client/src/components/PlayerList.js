import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeletePlayerButton from './DeletePlayerButton';
import ManagePlayersLayout from '../layouts/ManagePlayersLayout';

const PlayerList = () => {
  const [ players, setPlayers ] = useState([]);

  // skip deleted products
  const removeFromDom = playerId => {
    setPlayers(players.filter(player => player._id !== playerId));
  }
  // if we create a new Product, we just reload products (in case there are side effects in DB)
  // fetch products
  const loadPlayers = () => {
    axios.get('http://localhost:8000/api/players')
      .then(response=>{
        setPlayers(response.data);
    });
  };

  useEffect(()=>{
    loadPlayers();
  },[])
  return (
    <ManagePlayersLayout >
      <h2>Players</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"># (for demo)</th> 
            <th scope="col">Player</th>
            <th scope="col">Preferred Position</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx)=>
          ( <tr key={idx}>
              <th scope="row">{player._id}</th>
              <th scope="row">{player.name}</th>
              <th scope="row">{player.position}</th>
              <th scope="row">
                <Link className="btn btn-success" to={`/players/${player._id}/edit`}>Edit</Link>
                <DeletePlayerButton playerName={player.name} playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
              </th>
          </tr>))
          }
        </tbody>
      </table>
    </ManagePlayersLayout>
  )
}

export default PlayerList;