import React, { useState } from 'react'
import axios from 'axios';
import Toast from '../../assets/toast';

const SignUp = () => {
  const [user, setUser] = useState({name: "", alias: "", email: "", password: "", confirmPassword: ""});
  const [userErrors, setUserErrors] = useState({});
  
  const onChange = event => {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const signUp = e => {
    e.preventDefault();

    let hasError = false;
    // Note: I'm just validating name here, so you can check how back-end validation works
    const newUserErrors = {...userErrors};
    if(user.name.trim().length < 3){
      hasError = true;
      newUserErrors.name = {message: "Must be at least 3 characters"};
    } else {
      delete newUserErrors.name
    }
    setUserErrors(newUserErrors);

    // prevent to register if there are validation errors
    if(!hasError) {
      axios.post('http://localhost:8000/api/register', {...user})
      .then(response => {
        setUserErrors({});
        Toast.fire({
          icon: 'success',
          title: 'Success, Please Login'
        })
      }).catch(error => {
        console.log(error)
        setUserErrors(error.response.data.errors)
      })
    }
  }

  return (
      <form onSubmit={ signUp } className="mt-5 mb-5 authentication-form">
        <div className="row flex-column align-items-center mt-3 mb-3">
          <h2>Register</h2>
            <div className="col-md-9 mb-3">
              <span className="form-label left-label">Name</span>
              <input type="text" autoFocus name="name"  className="form-control" value={user.name} onChange = { onChange }/> 
              {userErrors.name && 
                <div className="col-sm-12">
                  <span className="text-danger">{userErrors.name.message}</span>
                </div>
              }
            </div>

            <div className="col-md-9 mb-3">
              <span className="form-label left-label">Alias</span>
              <input type="text" autoFocus name="alias"  className="form-control" value={user.alias} onChange = { onChange }/> 
              {userErrors.alias && 
                <div className="col-sm-12">
                  <span className="text-danger">{userErrors.alias.message}</span>
                </div>
              }
            </div>

            <div className="col-md-9 mb-3">
              <span className="form-label left-label">Email</span>
              <input type="text" autoFocus name="email"  className="form-control" value={user.email} onChange = { onChange}/> 
              {userErrors.email && 
                <div className="col-sm-12">
                  <span className="text-danger">{userErrors.email.message}</span>
                </div>
              }
            </div>

            <div className="col-md-9 mb-3">
              <span className="form-label left-label">Password</span>
              <input type="password" autoFocus name="password"  className="form-control" value={user.password} onChange = { onChange}/> 
              {userErrors.password && 
                <div className="col-sm-12">
                  <span className="text-danger">{userErrors.password.message}</span>
                </div>
              }
            </div>

            <div className="col-md-9 mb-3 ">
              <span className="form-label left-label">Confirm Password</span>
              <input type="password" autoFocus name="confirmPassword"  className="form-control" value={user.confirmPassword} onChange = { onChange}/> 
              {userErrors.confirmPassword && 
                <div className="col-sm-12">
                  <span className="text-danger">{userErrors.confirmPassword.message}</span>
                </div>
              }
            </div>
        </div>

        <button disabled={user.name === "" || user.alias === "" || user.email === "" || user.password === ""} className="btn btn-primary mb-5 btn-submit" type="submit">Register</button>
      </form>
  )
}

export default SignUp;
