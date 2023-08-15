import React from "react";

const getValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== '' && color;
}

const Hello = props => {

  const hello = props.match.params.hello;
  const color = getValidColor(props.match.params.color);
  const background = getValidColor(props.match.params.background);

  const style = {
    backgroundColor: background || "white",
    color: color || "black"
  };
  
  return (
    <h3 style={style}>The word is: {hello}</h3>
  )
}
export default Hello;