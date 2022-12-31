import { useEffect, useState } from "react";
import io from "socket.io-client"
import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";


function App() {
  const [socket] = useState(io(":8000"));
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(room !== "") {
      socket.on("welcome_new_message_from_server_"+room, data => {
        setMessages(prevMessages => {
          return [...prevMessages, ...data]
        });
        setIsLoading(false)
      });
      socket.on("new_message_from_server_"+room, data => {
        console.log('set message2');
        setMessages(prevMessages => {
          return [...prevMessages, data]
        })
      });
    }
  }, [room]);

  const onLogin = (username, room) => {
    setIsLoading(true);
    setRoom(room);
    setUsername(username);
    socket.emit('join_chat', {username, room});
  }

  const onSendMessage = message => {
    setMessages(prevMessages => {
      return [...prevMessages, {username, message}]
    })
    socket.emit('new_message', {username, room, message});
  }
  
  return (
    <div className="App">
      <div className="content-size" style={{background:"lightgray", border: "2px solid black"}}>
        <h1>MERN CHAT</h1>
      </div>
      {username === "" && <div className="content-size" style={{border: "2px solid black"}}>
        <Login onLogin={onLogin}/>
      </div>}
      { username !== "" &&
        <>
          {!isLoading && <div className="content-size main" style={{}}><Chat room={room} messages={messages} currentUsername={username} onSendMessage={onSendMessage}/></div>}
          {isLoading && <div className="main loading-container"><div className="loader" style={{alignItems: "center", justifyContent: "center"}}></div></div>}
        </>
      }
    </div>
  );
}

export default App;
