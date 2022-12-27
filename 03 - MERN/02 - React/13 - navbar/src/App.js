import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import MyContext from './context/MyContext';


function App() {
  const [name, setName] = useState("");

  return (
    <div className='App'>
      <MyContext.Provider value={{name: name, setName: setName}}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
