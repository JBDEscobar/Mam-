import React, { useState } from 'react';
import AnimatedRose from './AnimatedRose';

const MothersDayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => setShowMessage(true), 2000);
  };

  return (
    <div className="card-container">
      {!isOpen ? (
        <div className="closed-card" onClick={handleClick}>
          <div className="envelope"></div>
          <div className="heart"></div>
        </div>
      ) : (
        <div className="opened-card">
          {!showMessage ? (
            <AnimatedRose />
          ) : (
            <div className="message">
              <h1>¡Feliz Día Mamá!</h1>
              <p>Eres la mejor del mundo entero</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MothersDayCard;