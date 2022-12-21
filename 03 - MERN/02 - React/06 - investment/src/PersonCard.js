import React from 'react';

const PersonCard = props => {    
  
  const { firstName, lastName, age, hairColor } = props;

  return (
    <>
      <h1>{`${lastName}, ${firstName}`}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <br></br>
    </>
  )
}

export default PersonCard;