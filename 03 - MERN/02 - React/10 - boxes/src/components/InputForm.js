import React, { useRef, useState } from  'react';

const InputForm = (props) => {
  const colorRef = useRef();
  const sideRef = useRef();
  const [colorError, setColorError] = useState("");
  const [sideError, setSideError] = useState("");

  const addBox = () => {
    const color = colorRef.current.value;
    const side = sideRef.current.value;
    if(color.trim() !== "" && side !== "") {
      props.addBox({color: color, side: side});
      colorRef.current.value = "";
      sideRef.current.value = "";
    }
  }
  const validateColor = () => {
    const s = new Option().style;
    s.color = colorRef.current.value;
    if(s.color === "") {
      setColorError("Please insert a valid color");
    } else {
      setColorError(null);
    }
  }

  const validateSide = () => {
    const side = sideRef.current.value;
    if(sideRef.current.value.trim() == "") {
      setSideError("Side cannot be empty");
    } else if(side > 10 || side < 2) {
      setSideError("Side must be between 2-10");
    } else {
      setSideError(null)
    }
  }

  return(
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-8">
          <div className="input-group">
            <span className="input-group-text">Color</span>
            <input type="text" className="form-control" placeholder="Color" ref={ colorRef } onChange={ validateColor } />
            {colorError && (
              <div className="col-sm-12">
                <span className="text-danger">{ colorError }</span>
              </div>
            )}
          </div>
        </div>
        <div className="col-3">
          <div className="input-group">
            <span className="input-group-text">Side</span>
            <input type="number" min={1} max={10} className="form-control" placeholder="Side" ref={ sideRef } onChange={ validateSide } />
          </div>
          {sideError && (
              <div className="col-sm-12">
                <span className="text-danger">{ sideError }</span>
              </div>
            )}
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-primary" disabled={colorError || colorError === "" || sideError || sideError === ""} onClick={ addBox }>Add</button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
