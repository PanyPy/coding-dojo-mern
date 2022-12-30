import { useEffect, useState } from "react";
import io from "socket.io-client"
import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  const [socket] = useState(io(":8000"));
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("new_message_from_server", data => setMessage(data));
    socket.emit('join_chat');
  }, []);

  console.log(username);
  return (
    <div className="App">
      <div style={{background:"lightgray", border: "2px solid black", margin: "20px 10rem"}}>
        <h1>MERN CHAT</h1>
      </div>
      <div style={{border: "2px solid black", margin: "10px 10rem"}}>
        {username === "" && <Login setUsername = {setUsername}/>}
        {username !== "" && <Chat message={message} />}
      </div>
    </div>
  );
}

export default App;
