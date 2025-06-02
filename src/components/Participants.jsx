import { useState } from 'react';
import styles from './Participants.module.css';

const Participants = () => {
  const [participants] = useState([
    { id: 1, name: 'Admin User' },
    { id: 2, name: 'Client' },
  ]);

  return (
    <div className={styles.participantsContainer}>
      <div className={styles.participantsList}>
        {participants.map(participant => (
          <div 
            key={participant.id}
            className={styles.participant}
          >
            {participant.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;