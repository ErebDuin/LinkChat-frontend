import React from 'react';

const MessageList = ({ messages }) => {
  console.log('MessageList received messages:', messages);

  return (
    <div className="message-list">
      {messages?.map((msg, index) => (
        <div key={index} className="message">
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
