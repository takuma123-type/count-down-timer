import { useState, useEffect } from 'react';

function CountdownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeLeft, isRunning]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setTimeLeft(initialTime);
    setIsRunning(true);
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{formatTime(timeLeft)}</h2>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default CountdownTimer;
