import { useState } from "react";

const Login = props => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("Star Wars");
  
  console.log(room)
  return (
    <div className="row flex-column align-items-center mt-3 mb-3" style={{minHeight: "300px"}}>
      <h2 className="mb-5"> Get started right now!</h2>
      <div className="col-md-10 mb-3 ">
        <h4 className="d-flex flex-row"> I want to start chatting with the name...</h4>
        <div className="input-group mb-3">
          <span className="input-group-text" >Name</span>
          <input type="text" autoFocus name="name" placeholder="My name..." onChange={e => setUsername(e.target.value)} className="form-control"/> 
          <button disabled={username.length < 3} type="button" className="btn btn-success ms-3" onClick = {() => props.onLogin(username, room) }>Star Chatting</button>
        </div>
      </div>
      <div className="col-md-12 mb-3 ">
        <div className="form-control">
        <h2> Select Room!</h2>
          <input type="radio" className="btn-check" name="room_1" id="room1" onChange={() => setRoom("Star Wars")} checked={room === "Star Wars"}/>
          <label className="btn btn-outline-success" htmlFor="room1">Star Wars</label>

          <input type="radio" className="btn-check" name="room_2" id="room2" onChange={() => setRoom("The Lord of the Rings")} checked={room === "The Lord of the Rings"}/>
          <label className="btn btn-outline-success" htmlFor="room2">The Lord of the Rings</label>

          <input type="radio" className="btn-check" name="room_3" id="room3" onChange={() => setRoom("Fast & Furious")} checked={room === "Fast & Furious"}/>
          <label className="btn btn-outline-success" htmlFor="room3">Fast & Furious</label>
        </div>
      </div>
    </div>
  );
}

export default Login;