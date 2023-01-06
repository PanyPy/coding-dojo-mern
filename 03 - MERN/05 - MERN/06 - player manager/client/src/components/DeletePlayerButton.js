import React from 'react'
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DeletePlayerButton = props => {
  const { playerId, playerName, successCallback } = props;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const deletePlayer = e => {
    setIsOpen(false);
    axios.delete('http://localhost:8000/api/player/' + playerId)
      .then(res=>(successCallback())
    );
  }

  return (
    <>
      <button className="btn btn-danger" type="button" onClick={() => setIsOpen(true)}>
        Delete
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h4>Are you sure you want to delete</h4>
        <h3>{playerName}?</h3>
        <button className="btn btn-danger" type="button" onClick={deletePlayer}> Yes</button>
        <button className="btn btn-default" onClick={() => setIsOpen(false)}>No</button>
      </Modal>
    </>
  )
}

export default DeletePlayerButton;