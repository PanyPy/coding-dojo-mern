import React, { useRef } from 'react';
import axios from 'axios';

 const InputForm = (props) => {
  const ideaRef = useRef();

  const createIdea = () => {
    axios.post('http://localhost:8000/api/idea', 
      {note: ideaRef.current.value})
      .then(response => {
        ideaRef.current.value = "";
        props.loadIdeas();
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="container align-items-center justify-content-center col-7 mt-2 mb-4">
      <div className="input-group mb-3">
        <input type="text" className="form-control fs-8" minLength="8" placeholder="Any ideas...?" ref={ ideaRef } />
        <button type="button" className="btn btn-primary" onClick={ createIdea }>Post Idea!</button>
      </div>
    </div>
  );
}
export default InputForm;
