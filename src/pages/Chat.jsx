import React from 'react';
import ChatWindow from '../components/ChatWindow';
import Participants from '../components/Participants'
import Controls from  '../components/Controls';

const Chat = () => (
  <ChatWindow
    leftContent={<Participants />}
    // topRightContent={}
    bottomRightContent={<Controls />}
  />
);

export default Chat;