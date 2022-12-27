import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = () => {
  const context = useContext(MyContext);

  return (
    <div className="navbar">
      <p>{context.name && `Hi ${context.name}!`}</p>
    </div>
  );
}
export default Navbar;