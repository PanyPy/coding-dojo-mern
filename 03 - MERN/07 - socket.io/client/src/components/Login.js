import { useRef, useState } from "react";

const Login = props => {
  // const usernameRef = useRef("");
  const [username, setUsername] = useState("");
  
  // const setUsername = () => {
  //   if(usernameRef.current.value.length >2)
  //     props.setUsername(usernameRef.current.value);
  // }

  return (
    <div className="row flex-column align-items-center mt-3 mb-3" style={{minHeight: "300px"}}>
      <h2 className="mb-5"> Get started right now!</h2>
      <div className="col-md-10 mb-3 ">
        <h3 className="d-flex flex-row"> Get started right now!</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" >Name</span>
          <input type="text" autoFocus name="name" placeholder="My name..." onChange={e => setUsername(e.target.value)} className="form-control"/> 
          <button disabled={username.length < 3} type="button" className="btn btn-success ms-3" onClick = { () => props.setUsername(username) }>Star Chatting</button>
        </div>
      </div>
    </div>
  );
}

export default Login;