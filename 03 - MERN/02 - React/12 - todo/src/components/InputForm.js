import React, { useRef } from 'react';

 const InputForm = (props) => {
  const noteRef = useRef();
  const addNote = () => {
    if(noteRef.current.value.trim() !== "") {
      props.addNote(noteRef.current.value);
      noteRef.current.value = "";
    }
  }

  return (
    <div className="container align-items-center justify-content-center col-3 mt-3 mb-3">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add TODO" ref={ noteRef } />
        <button type="button" className="btn btn-primary" onClick={ addNote }>Add</button>
      </div>
    </div>
  );
}
export default InputForm;