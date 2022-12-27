import { useState } from 'react';
import './App.css';
import BoxesView from './components/BoxesView';
import InputForm from './components/InputForm';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = data => {
    const newBoxes = [...boxes];
    newBoxes.push(data);
    setBoxes(newBoxes);
  }

  return (
    <div className="App">
      <InputForm addBox={ addBox } />
      <BoxesView boxes={ boxes } />
    </div>
  );
}

export default App;
