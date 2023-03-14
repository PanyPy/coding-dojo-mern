import React, { useRef } from 'react';
import axios from 'axios';
import Toast from '../../assets/toast';

 const InputForm = (props) => {
  const ideaRef = useRef();

  const createIdea = () => {
    axios.post('http://localhost:8000/api/idea', 
      {note: ideaRef.current.value})
      .then(response => {
        ideaRef.current.value = "";
        props.loadIdeas();
        Toast.fire({
          icon: 'success',
          title: 'Idea posted!'
        })
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="container align-items-center justify-content-center col-6 mt-3 mb-3">
      <div className="input-group mb-3">
        <input type="text" className="form-control" minLength="8" placeholder="Post something witty here.." ref={ ideaRef } />
        <button type="button" className="btn btn-primary" onClick={ createIdea }>Idea!</button>
      </div>
    </div>
  );
}
export default InputForm;