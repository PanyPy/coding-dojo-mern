import React from "react";

const messageStyle = {
  alignSelf: "flex-start",
  backgroundColor: "lightgrey"
}

const myMessageStyle = {
  alignSelf: "flex-end",
  backgroundColor: "skyblue"
}


const Message = props => {
  const {message, currentUsername} = props;

  if(!message.username) {
    return (<h5 className="d-flex justify-content-end">{message.message}</h5>)
  }

  let author = message.username;
  let style = messageStyle;
  if (message.username === currentUsername) {
    author = "You";
    style = myMessageStyle;
  }

	return (
		<div className="col-md-10 mb-3 message-box" style={style} >
      <h5 className="d-flex">{author} said..</h5>
      <p className="d-flex mb-1" style={{whiteSpace: "pre-line"}}>{message.message}</p>
    </div>
	)
}

export default Message;