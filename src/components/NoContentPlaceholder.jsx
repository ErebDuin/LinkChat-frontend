import React, { useEffect, useRef } from 'react';

const NoContentPlaceholder = ({ message = "No messages yet." }) => (
  <div style={{
    textAlign: 'center',
    color: '#111',
    padding: '10px 0',
    fontSize: '16px'
  }}>
    <span 
    role="img" 
    aria-label="empty" 
    style={{ 
        fontSize: '30px',}}>
        💬
      </span>
    <div>{message}</div>
  </div>
);

export default NoContentPlaceholder;