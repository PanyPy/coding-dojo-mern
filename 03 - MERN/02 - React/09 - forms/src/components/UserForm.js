import React, { useReducer } from  'react';

const initialState = {
  firstName: {value: "", error: null},
  lastName: {value: "", error: null},
  email: {value: "", error: null, },
};

const reducer = (state, action) => ({
    ...state,
    [action.type]: action.payload
  });

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleChange(e) {
    const { name, value } = e.target;
    let error = value.length < 2 && value !== "" ? "Must be at least 2 characters long." : null;
    // validate email -> credits https://www.w3resource.com/javascript/form/email-validation.php
    if(!error && name === "email" && value.length < 8) {
      error = "Must be at least 8 characters long.";
    } else if(!error && name === "email" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
      error = "You have entered an invalid email address!";
    }
    dispatch({
        type: name,
        payload: {value, error: error} 
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">First name</span>
          <input type="text" className="form-control" placeholder="First Name" value={state.firstName.value} name="firstName" onChange={ handleChange } />
          {state.firstName.error && <div className="col-sm-12">
            <span className="text-danger">{state.firstName.error}</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Last name</span>
          <input type="text" className="form-control" placeholder="Last Name" value={state.lastName.value} name="lastName" onChange={ handleChange } />
          {state.lastName.error && <div className="col-sm-12">
            <span className="text-danger">{state.lastName.error}</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Email</span>
          <input type="text" className="form-control" placeholder="Email" value={state.email.value} name="email" onChange={ handleChange } />
          {state.email.error && <div className="col-sm-12">
            <span className="text-danger">{state.email.error}</span>
          </div>}
        </div>
      </div>
      <button type="button" className="btn btn-primary">Submit</button>

    </div>
  );
}


export default UserForm;
