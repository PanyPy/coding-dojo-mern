import { useEffect, useState } from "react";
import io from "socket.io-client"
import './App.css';

function App() {
  const [socket] = useState(io(":8000"));
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("new_message_from_server", data => setMessage(data));
    socket.emit('join_chat');
  }, [socket]);

  return (
    <div className="App">
      <h1>Socket test</h1>
      {message}
    </div>
  );
}

export default App;
