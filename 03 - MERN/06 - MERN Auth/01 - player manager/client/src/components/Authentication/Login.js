import React, { useState } from 'react'
import axios from 'axios';
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie'

const Login = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isEdit = id && props.isEdit;
  const isView = id && props.isView;

  const [user, setUser] = useState({email: "", password: ""});
  
  const onChange = event => {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser)
  };

  const login = e => {
    e.preventDefault();
    axios.post('/api/login', 
      {...user}) // check
    .then(response=>{
      // Cookies.set('usertoken', response.data['usertoken'])
      navigate('/');
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
              
              {/* {nameError &&  */}
                <div className="col-sm-12">
                  {/* <span className="text-danger">{nameError}</span> */}
                </div>
              {/* } */}
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="password" autoFocus name="password"  className="form-control" value={user.password} onChange = { onChange}/> 
            </div>
          </div>
        </div>
        <Link className="btn btn-default" to={"/register"}>Register</Link>
        <button className="btn btn-primary" type="submit">Submit</button>
        <button disabled={user.email === "" || user.password === ""} className="btn btn-primary" type="submit">Submit</button>
      </form>
  )
}

export default Login;