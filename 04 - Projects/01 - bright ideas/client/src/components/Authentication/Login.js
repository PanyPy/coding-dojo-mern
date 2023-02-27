import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", password: ""});
  const [emailError, setEmailError] = useState(undefined);
  
  const onChange = event => {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser)
  };

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', 
      {...user})
    .then(response=>{
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));
      navigate("/bright_ideas");
    }).catch(err => {
      console.log(err)
      if(err.response?.data?.user) {
        setEmailError(err.response.data.user);
      } else {
        setEmailError(undefined);
        alert(err.response?.data?.error);
      }
    })
  }

  return (
      <form onSubmit={ login } className="mt-5 mb-5 authentication-form">
        <div className="row flex-column align-items-center mt-3 mb-3">
          <h2>Login</h2>
          <div className="col-md-9 mb-3 ">
            <span className="form-label left-label">Email</span>
            <input type="text" autoFocus name="email"  className="form-control" value={user.email} onChange = { onChange}/> 
            {emailError && 
              <div className="col-sm-12">
                <span className="text-danger">{emailError}</span>
              </div>
            }
          </div>

          <div className="col-md-9 mb-3 ">
            <span className="form-label left-label">Password</span>
            <input type="password" autoFocus name="password"  className="form-control" value={user.password} onChange = { onChange}/> 
          </div>
        </div>

        <button disabled={user.email === "" || user.password === ""} className="btn btn-primary btn-submit" type="submit">Login</button>
      </form>
  )
}

export default Login;