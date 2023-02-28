import React, { useRef, useState } from "react";

const ChatInput = props => {
  const [message, setMessage] = useState("");

  const onSendMessage = () => {
    props.onSendMessage(message);
    setMessage("");
  }
	return (
		<div className="col-md-10" style={{alignSelf: "center", marginBottom: 15, marginTop: "auto"}}>
      <div className="input-group">
        <textarea autoFocus type="text" className="form-control" value={message} onChange={e => setMessage(e.target.value)}/>
        <button className="btn btn-primary ms-3" disabled={message.length < 3} type="button" onClick={ onSendMessage }>Send</button>
      </div>
    </div>
	)
}

export default ChatInput;