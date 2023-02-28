import React, { useState } from 'react'
import axios from 'axios';
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';

const SignUp = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [user, setUser] = useState({email: "", password: "", confirmPassword: ""});
  
  const onChange = event => {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser)
  };

  const signUp = e => {
    e.preventDefault();
    axios.post('/api/register', 
      {...user}) // check
    .then(response => {
      alert("Successful, please login")
      navigate('/login')
    })
  }

  return (
      <form onSubmit={ signUp } className="mt-5 mb-5">
        <div className="row flex-column align-items-center mt-3 mb-3">
          <h2>Sign Up</h2>
          <div className="col-md-3 mb-3 ">
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input type="text" autoFocus name="name"  className="form-control" value={user.name} onChange = { onChange}/> 
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input type="text" autoFocus name="email"  className="form-control" value={user.email} onChange = { onChange}/> 
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="password" autoFocus name="password"  className="form-control" value={user.password} onChange = { onChange}/> 
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Confirm Password</span>
              <input type="password" autoFocus name="confirmPassword"  className="form-control" value={user.confirmPassword} onChange = { onChange}/> 
            </div>
          </div>
        </div>
        <Link className="btn btn-default" to={"/login"}>Login</Link>
        <button disabled={user.email === "" || user.password === ""} className="btn btn-primary" type="submit">Submit</button>
      </form>
  )
}

export default SignUp;