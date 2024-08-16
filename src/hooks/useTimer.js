import { useState, useEffect } from 'react';

const useTimer = (initialTime = 60) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      return;
    }
    const newTimer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    setTimer(newTimer);
    return () => clearInterval(newTimer);
  }, [timeLeft]);

  return [timeLeft, setTimeLeft];
};

export default useTimer;
