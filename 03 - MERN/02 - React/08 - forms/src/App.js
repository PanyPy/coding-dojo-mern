import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserView from './components/UserView';

function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
      <UserView user={user} />
    </div>
  );
}

export default App;
