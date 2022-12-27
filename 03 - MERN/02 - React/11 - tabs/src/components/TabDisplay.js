const TabStyle = {
  border: "1px solid #ced4da",
  height: "100px"
};

const TabDisplay = (props) => {
  
  return (
    <div className="container align-items-center justify-content-center col-3">
      <p style={ TabStyle }>{ props.message }</p>
    </div>
  );
};

export default TabDisplay;

