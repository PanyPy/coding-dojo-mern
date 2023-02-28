import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", password: ""});
  
  const onChange = event => {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser)
  };

  const login = e => {
    e.preventDefault();
    axios.post('/api/login', 
      {...user})
    .then(response=>{
      navigate('/');
    }).catch(err => {
      alert(err.response?.data?.error);
    })
  }

  return (
      <form onSubmit={ login } className="mt-5 mb-5">
        <div className="row flex-column align-items-center mt-3 mb-3">
          <h2>Login</h2>
          <div className="col-md-3 mb-3 ">
            <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input type="text" autoFocus name="email"  className="form-control" value={user.email} onChange = { onChange}/> 
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="password" autoFocus name="password"  className="form-control" value={user.password} onChange = { onChange}/> 
            </div>
          </div>
        </div>

        <Link className="btn btn-default" to={"/register"}>Register</Link>
        <button disabled={user.email === "" || user.password === ""} className="btn btn-primary" type="submit">Login</button>
      </form>
  )
}

export default Login;