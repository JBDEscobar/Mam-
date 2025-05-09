import React, { useState, useEffect } from 'react';

const AnimatedRose = () => {
  const [bloom, setBloom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBloom(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`rose-container ${bloom ? 'bloom' : ''}`}>
      <div className="rose">
        <div className="petal petal1"></div>
        <div className="petal petal2"></div>
        <div className="petal petal3"></div>
        <div className="petal petal4"></div>
        <div className="petal petal5"></div>
        <div className="stem"></div>
        <div className="leaf"></div>
      </div>
    </div>
  );
};

export default AnimatedRose;