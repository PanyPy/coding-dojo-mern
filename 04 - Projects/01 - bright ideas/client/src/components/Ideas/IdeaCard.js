import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import defaultAvatar from'../../assets/avatar.png';

const IdeaCard = props => {
  const {_id, approvedAt, note, postedBy} = props.idea;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const likes = [];
  props.idea.likes?.forEach(user => {
    if (!likes.find(currentUser => currentUser._id !== user._id)) {
      likes.push(user);
    }
  });

  const deleteIdea = () =>{
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "If you accept you will not be able to get it back!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('http://localhost:8000/api/ideas/' + _id)
        .then(() => props.reloadIdeas());
      }
    })

  }

  const likeIdea = likeValue =>{
    const newIdea = props.idea;

    if(likeValue && !newIdea.likes.includes(currentUser._id)) {
      newIdea.likes.push(currentUser._id);
    }
    if(!likeValue) {
      newIdea.likes = newIdea.likes.filter(user => user !== currentUser._id);
    }

    const { approvedAt, ...ideaAttr } = newIdea;
    axios.put('http://localhost:8000/api/ideas/' + _id, 
      {...ideaAttr})
    .then(() => props.reloadIdeas());
  }

  const approveIdea = () =>{
    const newIdea = props.idea;
    newIdea.approvedAt = Date.now();

    axios.put('http://localhost:8000/api/ideas/' + _id, 
      {...newIdea})
    .then(() => props.reloadIdeas());
  }

  return (
    <div className="row d-flex justify-content-center mt-3 mb-3" align="center">
      <div className="d-flex justify-content-start" style={{maxWidth: "540px", width: "80%"}}>
        <img src={postedBy?.photo || defaultAvatar} style={{height:"50px", width: "50px"}} className="img-fluid img-thumbnail m-2" alt="perfil"/>
        <h4 className="my-auto"><Link style={{color: "white", fontWeight: "bold"}} to={`/users/${postedBy?._id}`}>{`${postedBy?.alias.charAt(0).toUpperCase()+postedBy?.alias.slice(1)}`}</Link> says:</h4>
      </div>
			<div>
      <div key={props.idea._id} className="card mb-1" style={{maxWidth: "540px", width: "80%"}}>
        <div className="row g-0">
            <div className="card-body">
            <p className="card-title mb-3">{note}</p>
          </div>
        </div>
      </div>
      {props.showLikes &&
        <div className='d-flex justify-content-between col-md-5 align-self-end' style={{maxWidth: "540px", width: "80%"}} >
          {currentUser.role !== 'Admin' ?  (currentUser._id !== postedBy._id && props.idea.likes.includes(currentUser._id) ?  <button onClick={() => likeIdea(false)} className="btn btn-sm btn-outline-danger">- like</button> :
                currentUser._id !== postedBy._id && <button onClick={() => likeIdea(true)} className="btn btn-sm btn-success">+ like</button>)
            : !approvedAt && <button onClick={approveIdea} className="btn btn-sm btn-warning">Aprobar idea</button>}

          <h5 className="fs-6">{likes.length > 0 ? <Link style={{color: "white", fontWeight:"bold"}}   to={`/bright_ideas/${_id}`}> {`${likes.length === 1 ? '1 person' : likes.length +' people'} likes this`} </Link> : approvedAt ? 'No likes, yet' : 'Not Approved, yet'} </h5>
          {(currentUser._id === postedBy._id || currentUser.role === 'Admin') && <button onClick={deleteIdea}  className="btn btn-sm btn-danger" sty>Delete</button>}
        </div>
        }</div>
    </div>
    
  )
}

export default IdeaCard;
