import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const IdeaCard = props => {
  const {_id, note, postedBy} = props.idea;
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

    axios.put('http://localhost:8000/api/ideas/' + _id, 
      {...newIdea})
    .then(() => props.reloadIdeas());
  }

  return (
    <div className="row d-flex justify-content-center mt-3 mb-3" align="center">
      <div className="d-flex col-md-3">
        <img src={currentUser.photo} style={{width: 50+"px", height:50+"px"}} className="img-fluid img-thumbnail" alt="photo-perfil"/>
        <h4><Link to={`/users/${postedBy?._id}`}>{`${postedBy?.name.charAt(0).toUpperCase()+postedBy?.name.slice(1)}`}</Link> says:</h4>
      </div>
      <div key={props.idea._id} className="card mb-1" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="card-body">
            <p className="card-title mb-3">{note}</p>
          </div>
        </div>
      </div>
      {props.showLikes &&
        <div className='d-flex justify-content-between col-md-3'>
          {currentUser._id !== postedBy._id && 
            props.idea.likes.includes(currentUser._id) ? 
              <button onClick={() => likeIdea(false)} className="btn btn-sm btn-outline-danger">- like</button> :
              currentUser._id !== postedBy._id && <button onClick={() => likeIdea(true)} className="btn btn-sm btn-success">+ like</button>}

          <h5>{likes.length > 0 ? <Link to={`/bright_ideas/${_id}`}> {`${likes.length === 1 ? '1 person' : likes.length +' people'} like this`} </Link> : 'No likes, yet'} </h5>
          {currentUser._id === postedBy._id && <button onClick={deleteIdea}  className="btn btn-sm btn-danger">Delete</button>}
        </div>
        }
    </div>
    
  )
}

export default IdeaCard;