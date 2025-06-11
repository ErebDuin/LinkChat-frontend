import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import Participants from '../components/Participants';
import Controls from '../components/Controls';
import MessageList from '../components/MessageList';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <ChatWindow
      messages={messages}
      leftContent={<Participants />}
      topRightContent={<MessageList messages={messages} />}
      bottomRightContent={<Controls onSend={handleSend} />}
    />
  );
};

export default Chat;
