import React, { useRef, useState } from 'react';
import Button from "./Button";
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';
import './Controls.css';

  const Controls = ({ onSend, currentChatId }) => {

  const [text, setText] = useState('');
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/logout');
  };


  const handleSend = async () => {
    const trimmed = text.trim();
    if (!trimmed && !attachment) return;

    const messageType = attachment ? "IMAGE" : "TEXT";

    const payload = {
      chatId: currentChatId,
      sender: "alice",
      recipient: "bob",
      messageType: messageType,
      messageText: trimmed || null,
    };

  try {
    const response = await fetch("http://localhost:8080/api/messages/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed to send message");

    const savedMessage = await response.json();
    
    setText("");
    setAttachment(null);

    onSend({ text: "", attachment, isUser: true, messageType });
  } catch (err) {
    console.error("Error sending message:", err);
  }
};

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
    setAttachment(e.target.files[0]);
    }
  };

  return (
    <div className="controls-container">
      <div className="element-row top-row">
        <TextInput
          className="span-4-columns"  
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message ..."
        />
        <Button variant="primary"
          onClick={handleSend}
          disabled={!text.trim()&& !attachment}
          >
          Send
        </Button>
      </div>
      <div className="element-row bottom-row">
        <Button
          variant="primary"
          onClick={handleAttachClick}
          >
          Attach file
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          multiple
        />
        <div></div>
        <div></div>
        <div></div>
        <Button
          variant="primary"
          onClick={handleSignOut}
          >
          Sign out
        </Button>
     </div>
        {attachment && (
          <div style={{ marginTop: 8, fontSize: 16, color: '#111' }}>
            Selected file: {attachment.name}
          </div>
        )}
    </div>
  );
};

export default Controls;