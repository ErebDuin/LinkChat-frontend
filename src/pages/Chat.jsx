import React from 'react';
import ChatWindow from '../components/ChatWindow';
import Participants from '../components/Participants'

const Chat = () => (
  <ChatWindow
    leftContent={<Participants />}
    // topRightContent={}
    // bottomRightContent={}
  />
);

export default Chat;