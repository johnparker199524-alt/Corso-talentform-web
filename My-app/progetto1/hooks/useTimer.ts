import { useState, useEffect } from 'react';

export const useTimer = (initialSeconds: number = 300) => {
    //hooks
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert("Tempo scaduto! Ottimo lavoro sul tuo task.");
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  const startTimer = (seconds?: number) => {
    if (seconds !== undefined) setTimeLeft(seconds);
    setIsActive(true);
  };

  const pauseTimer = () => setIsActive(false);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialSeconds);
  };

  return {
    timeLeft,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
    setIsActive
  };
};