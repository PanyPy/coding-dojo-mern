import React from "react";

const Number = props => {
  const number = props.match.params.number
  return (
    <>
      {!isNaN(number) && <h3>Number: {number}</h3> || <h3>Not a number</h3>}
    </>
  )
}
export default Number;