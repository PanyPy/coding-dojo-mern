import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import DeletePlayerButton from './DeletePlayerButton';
import ManagePlayersLayout from '../layouts/ManagePlayersLayout';

export const PLAYER_POSITIONS = {
  DEFENDERS: "Defender",
  FORWARD: "Forward",
  GOALKEEPER: "Goalkeeper",
  MIDFIELDER: "Midfielder"
};

const PlayerForm = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isEdit = id && props.isEdit;
  const isView = id && props.isView;

  const [player, setPlayer] = useState({id: "", name: "", position: ""});
  const [nameError, setNameError] = useState([]);  //API errors, should be array but we are validating only 1 field
  const [positionError, setPositionError] = useState([]);  //API errors, should be array but we are validating only 1 field

  const onChange = event => {
    const newPlayer = {...player};
    newPlayer[event.target.name] = event.target.value;
    setPlayer(newPlayer)
  };

  useEffect(() => {
    if(id) {
      axios.get('http://localhost:8000/api/players/' + id)
        .then(res => {
          const response = res.data;
          const newPlayer = {id: response._id, name: response.name, position: response.position};
          setPlayer(newPlayer)
        })
    }
  }, [id])

  // create
  const createPlayer = e => {
    e.preventDefault();
    console.log(player)
    axios.post('http://localhost:8000/api/player', 
      {...player}) // check
    .then(response=>console.log(response))
    .then(() => navigate("/players/list"))
    .catch(error=> {
      const errorResponse = error.response.data.errors;
      if(errorResponse?.name?.message) {
        setNameError(errorResponse?.name?.message)
      }
      if(errorResponse?.position?.message) {
        setPositionError(errorResponse?.position?.message)
      }
    })
  }

  // update
  const updatePlayer = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/players/' + player.id, 
      {...player}) // check
      .then(response => console.log(response))
      .then(() => navigate("/players/list"));
  }

  return (
    <ManagePlayersLayout location={ location } >
      <form onSubmit={ isEdit ? updatePlayer : createPlayer} className="mt-5 mb-5">
        <div className="row flex-column align-items-center mt-3 mb-3">
          <h2>{isView && "View"} {isEdit && "Edit"} {!isView && !isEdit && "Add"} Player</h2>
          <div className="col-md-6 mb-3 ">
            <div className="input-group mb-3">
              <span className="input-group-text" >Name</span>
              <input type="text" autoFocus name="name"  className="form-control" value={player.name} onChange = { onChange}/> 
              {nameError && 
                <div className="col-sm-12">
                  <span className="text-danger">{nameError}</span>
                </div>
              }
            </div>
            <div className="col">
              <div className="input-group">
                <label className="input-group-text">Preferred Position</label>
                <select name="position" value={player.position} onChange = { onChange} className="form-select">
                  <option value={PLAYER_POSITIONS.DEFENDER}>{PLAYER_POSITIONS.DEFENDER}</option>
                  <option value={PLAYER_POSITIONS.FORWARD}>{PLAYER_POSITIONS.FORWARD}</option>
                  <option value={PLAYER_POSITIONS.GOALKEEPER}>{PLAYER_POSITIONS.GOALKEEPER}</option>
                  <option value={PLAYER_POSITIONS.MIDFIELDER}>{PLAYER_POSITIONS.MIDFIELDER}</option>
                  <option value={"invalid"}>Invalid value (validate)</option>
                </select>
                {positionError && 
                <div className="col-sm-12">
                  <span className="text-danger">{positionError}</span>
                </div>
              }
              </div>
            </div>
          </div>
        </div>

        {isView && <Link className="btn btn-success" to={"/" + id + "/edit"}>Edit</Link> }
        {isView &&  <DeletePlayerButton playerId={id} playerName={player.name} successCallback={() => navigate("/")}/>}
        {!isView && <button disabled={player.name === "" || player.name.length < 2} className="btn btn-primary" type="submit">{ isEdit ? "Save" : "Add" }</button>}
      </form>
    </ManagePlayersLayout>
  )
}

export default PlayerForm;