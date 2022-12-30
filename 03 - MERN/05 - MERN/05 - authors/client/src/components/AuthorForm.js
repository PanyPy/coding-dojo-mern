import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import DeleteAuthorButton from './DeleteAuthorButton';

const AuthorForm = props => {
  const history = useHistory();
  const isEdit = props.id && props.isEdit;
  const isView = props.id && props.isView;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);  //API errors
  const [invalidID, setInvalidID] = useState(null);  //API errors

  useEffect(() => {
    // load if isEdit or isView
    if(props.id) {
      axios.get('http://localhost:8000/api/authors/' + props.id)
        .then(res => setName(res.data.name))
        .catch(error=> setInvalidID(props.id));
    }
  }, [])

  // create
  const createAuthor = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/author', 
      { name})
    .then(response=>console.log(response))
    .then(() => history.push("/"))
    .catch(error=> {
      const errorResponse = error.response.data.errors;
      if(errorResponse?.name?.message) {
        setNameError(errorResponse?.name?.message)
      }
    })
  }

  // update
  const updateAuthor = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/authors/' + props.id, 
      {name})
      .then(response => console.log(response))
      .then(() => history.push("/"));
  }

  if(invalidID) {
    return (<><h2>{`We couldn't find the author (id: ${invalidID})`}</h2><Link className="btn btn-primary" to={"/"}>Go Home</Link></>);
  }

  return (
    <form onSubmit={ isEdit ? updateAuthor : createAuthor}>
      <div className="row flex-column align-items-center mt-3 mb-3">
        <h2>{isView && "View"} {isEdit && "Edit"} {!isView && !isEdit && "Create"} - Favorite Authors</h2>
        <div className="col-md-3 mb-3 ">
          <div className="input-group">
            <span className="input-group-text" >Name</span>
            <input disabled={isView} type="text" autoFocus className="form-control" onChange = { e =>setName(e.target.value)} value={name}/>
            {nameError && <div className="col-sm-12">
            <span className="text-danger">{nameError}</span>
          </div>}
          </div>
        </div>
      </div>

      <Link className="btn btn-default" to={"/"}>Home</Link>
      {isView && <Link className="btn btn-success" to={"/" + props.id + "/edit"}>Edit</Link> }
      {isView &&  <DeleteAuthorButton authorId={props.id} successCallback={() => history.push("/")}/>}
      {!isView && <button disabled={name === ""} className="btn btn-primary" type="submit">{ isEdit ? "Save" : "Create" }</button>}
    </form>
  )
}

export default AuthorForm;