import { useState, useEffect } from 'react';
import styles from './Participants.module.css';


const Participants = ({ participants = [] }) => {
  return (
    <div className={styles.participantsContainer}>
      <div className={styles.participantsList}>
        {participants.length > 0 ? (
          participants.map((participant, index) => (
            <div 
              key={index}
              className={styles.participant}
            >
              {participant}
            </div>
          ))
        ) : (
          <div>No participants</div>
        )}
      </div>
    </div>
  );
};

export default Participants;