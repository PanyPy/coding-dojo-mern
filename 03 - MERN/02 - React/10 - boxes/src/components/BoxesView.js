import React from  'react';

const btnStyle = (box) => ({
  backgroundColor: box.color,
  display: "inline-block",
  margin: 20,
  width: `${box.side*20}px`,
  height: `${box.side*20}px`
});

const BoxesView = (props) => {
  const { boxes} = props;
    
  return(
    <>
      <h2>boxes</h2>
      {boxes.map(box => (
        <div className="square" style={btnStyle(box)}></div>
      ))}
    </>
  );
};

export default BoxesView;
