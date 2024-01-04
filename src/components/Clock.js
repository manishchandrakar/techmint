// Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css'; // Import the CSS file

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
