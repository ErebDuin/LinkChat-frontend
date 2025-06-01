import { useState } from 'react';
import styles from './Participants.module.css';

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
    <div className={styles.participantsContainer}>
      <div className={styles.participantsList}>
        {participants.map(participant => (
          <div 
            key={participant.id}
            className={`${styles.participant} ${participant.isActive ? styles.active : ''}`}
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