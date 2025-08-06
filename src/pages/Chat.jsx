import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';
import Participants from '../components/Participants';
import Controls from '../components/Controls';
import MessageList from '../components/MessageList';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams(); // Get the room ID from URL

  useEffect(() => {
    // When roomId changes, you can load chat data for that specific room
    if (roomId) {
      console.log(`Joining chat room: ${roomId}`);
      // Here you can add logic to:
      // 1. Connect to the specific chat room via websocket
      // 2. Load existing messages for this room
      // 3. Clear previous messages if switching rooms
      setMessages([]); // Clear messages when joining new room
    }
  }, [roomId]);

  const handleSend = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div>
      {roomId && (
        <div style={{ padding: '10px', background: '#f0f0f0', marginBottom: '10px' }}>
          <strong>Chat Room: {roomId}</strong>
        </div>
      )}
      <ChatWindow
        messages={messages}
        leftContent={<Participants />}
        topRightContent={<MessageList messages={messages} />}
        bottomRightContent={<Controls onSend={handleSend} />}
      />
    </div>
  );
};

export default Chat;
