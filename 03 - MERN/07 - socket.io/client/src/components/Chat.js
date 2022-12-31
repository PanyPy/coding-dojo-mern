import React, { useRef, useEffect } from "react";

import ChatInput from "./ChatInput";
import Message from "./Message";

const Chat = props => {
  const messagesEndRef = useRef(null)
  const {messages} = props;
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
    setTimeout(() => {
      scrollToBottom();
    }, "500")
  }, [messages]);

  return (
    <>
      <h4>{props.room} Room - {`(Hi, ${props.currentUsername})`}</h4>
      <div className="row flex-column align-items-center mt-3 mb-3 overflow-auto" style={{ margin: "20px"}}>
        <div className="d-flex flex-column">
          {messages.map((message, index) => <Message key={index} message={message} currentUsername={props.currentUsername} />)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSendMessage={props.onSendMessage} />
    </>
  );
}

export default Chat;