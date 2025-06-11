import React, { useEffect, useRef } from 'react';
import NoContentPlaceholder from './NoContentPlaceholder'; 
import './MessageList.css';

const MessageList = ({ messages }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]); 

  return (
    
     <div ref={listRef} className="message-list">
      {(!Array.isArray(messages) || messages.length === 0) ? (
        <NoContentPlaceholder message="No messages yet." />
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
              backgroundColor: msg.isUser ?  '#dcf8c6' : '#f1f0f0',
              padding: '10px 14px',
              borderRadius: '12px',
              maxWidth: '70%',
              wordBreak: 'break-word',
              boxShadow: '0 1px 2px rgba(39, 153, 28, 0.1)',
            }}
          >
           {msg.text}
           {msg.attachment && (
              <div style={{ color: '#111', marginTop: 4 }}>
                📎 {msg.attachment.name}
              </div>
            )}
          </div>
        ))
        )}
    </div>
  );
};

export default MessageList;
