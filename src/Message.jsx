import { useRef, useState } from 'react';
import './Message.css';

function Message() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    setMessage(text);
    setText('');
    setAttachment(null); // clear attachment after send
  };

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <div>
      {message && (
        <div className="message-container" style={{ marginBottom: '20px' }}>
          <div className="message">
            {message}
            {attachment && (
              <div style={{ marginTop: 8, fontSize: 16, color: '#7bb928' }}>
                📎 {attachment.name}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="message-container">
        <div className="input-row">
          <textarea
            value={text}
            placeholder="Message"
            onChange={(e) => setText(e.target.value)}
            maxLength={255}
            className="message-input"
            rows={2}
            style={{ resize: 'vertical' }}
          />
          <button
            onClick={handleSend}
            disabled={!text.trim()}
            className="send-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7bb928"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 4 }}
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send
          </button>
        </div>
        <div className="bottom-row">
          <button
            className="attach-button"
            type="button"
            onClick={handleAttachClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7bb928"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 8 }}
            >
              <path d="M21.44 11.05l-8.49 8.49a5 5 0 01-7.07-7.07l9.19-9.19a3 3 0 014.24 4.24l-9.19 9.19a1 1 0 01-1.41-1.41l8.49-8.49" />
            </svg>
            Attach file
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button className="signout-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7bb928"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 8 }}
            >
              <path d="M16 17l5-5-5-5M21 12H9M13 5V7a7 7 0 0 1 0 10v2" />
            </svg>
            Sign out
          </button>
        </div>
        {attachment && (
          <div style={{ marginTop: 8, fontSize: 16, color: '#7bb928' }}>
            Selected file: {attachment.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;