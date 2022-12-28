import React from "react";

const SearchID = props => {
	return (
		<div className="col">
      <div className="input-group">
        <span className="input-group-text">ID</span>
        <input disabled={props.disabled} type="text" className="form-control" ref = { props.idRef }/>
        <button disabled={props.disabled} className="btn btn-outline-secondary" type="button" onClick={ props.onSearch }><i className="fa fa-search"></i></button>
      </div>
    </div>
	)
}

export default SearchID;