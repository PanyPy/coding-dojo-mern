import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

const Form = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <div className="">
        <label >Your name: </label>
        <input type="text" placeholder="Insert name" onChange={e => context.setName(e.target.value)} /> 
      </div>
    </div>
  );
}
export default Form;