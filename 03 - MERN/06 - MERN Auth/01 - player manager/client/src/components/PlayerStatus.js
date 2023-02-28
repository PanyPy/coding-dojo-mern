import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import ManagePlayerStatusLayout from '../layouts/ManagePlayerStatusLayout';

const customStyles = {
  margin: "0px 10px",
  width: "25%"
};

const STATUS = {
  PLAYING: "Playing",
  NOT_PLAYING: "Not Playing",
  UNDECIDED: "Undecided"
};
const GAMES_NUMBER = 3;

const PlayerStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [ players, setPlayers ] = useState([]);

  // fetch players
  const loadPlayers = () => {
    axios.get('/api/players')
      .then(response=>{
        setPlayers(response.data);
    });
  };

  useEffect(()=>{
    loadPlayers();
  },[])

  const updateStatus = (playerToUpdate, newStatus) => {
    const updatePlayer = playerToUpdate;
    updatePlayer.gameStatus[id-1].status = newStatus;
    axios.put('/api/players/' + playerToUpdate._id, 
      {...updatePlayer, })
      .then(response => console.log(response))
      .then(() => navigate("/status/game/"+id));
  }

  return (
    <ManagePlayerStatusLayout gameCount={GAMES_NUMBER} location={location} >
      <h2>Player Status - Game {id}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx)=>
          ( <tr key={idx}>
              <th scope="row">{player.name}</th>
              <th scope="row">
                <button className={`btn ${player.gameStatus[id-1].status === STATUS.PLAYING ? "btn-success" : "btn-outline-dark" } `} style={customStyles} onClick={() => updateStatus(player,STATUS.PLAYING)}>{STATUS.PLAYING}</button>
                <button className={`btn ${player.gameStatus[id-1].status === STATUS.NOT_PLAYING ? "btn-danger" : "btn-outline-dark" } `} style={customStyles} onClick={() => updateStatus(player,STATUS.NOT_PLAYING)}>{STATUS.NOT_PLAYING}</button>
                <button className={`btn ${player.gameStatus[id-1].status === STATUS.UNDECIDED ? "btn-warning" : "btn-outline-dark" } `} style={customStyles} onClick={() => updateStatus(player,STATUS.UNDECIDED)}>{STATUS.UNDECIDED}</button>
              </th>
          </tr>))
          }
        </tbody>
      </table>
    </ManagePlayerStatusLayout>
  )
}

export default PlayerStatus;