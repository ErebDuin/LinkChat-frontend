import { useState } from 'react';
import './Participants.css';

const Participants = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Admin User', isActive: true },
    { id: 2, name: 'Client', isActive: false }
  ]);

  const handleParticipantClick = (id) => {
    setParticipants(prev => 
      prev.map(p => ({ ...p, isActive: p.id === id }))
    );
  };

  return (
    <div className="participants-container">
      <div className="participants-header">
        <h3>Chat Title/Name</h3>
      </div>
      <div className="participants-list">
        {participants.map(participant => (
          <div 
            key={participant.id}
            className={`participant ${participant.isActive ? 'active' : ''}`}
            onClick={() => handleParticipantClick(participant.id)}
          >
            {participant.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;