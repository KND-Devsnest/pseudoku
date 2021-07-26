import { useState } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);

  const start = () => {
    setTime(0);
    setIsStopwatchRunning(true);
    setIntervalId(
      setInterval(() => {
        setTime((pTime) => (pTime += 1));
      }, 1000)
    );
  };

  const stop = () => {
    setIsStopwatchRunning(false);
    clearInterval(intervalId);
  };

  const pause = () => {
    setIsStopwatchRunning(false);
    clearInterval(intervalId);
  };

  const resume = () => {
    setIsStopwatchRunning(true);
    setIntervalId(
      setInterval(() => {
        setTime((pTime) => (pTime += 1));
      }, 1000)
    );
  };

  const getInHours = () => {
    var h = Math.floor(time / 3600);
    var m = Math.floor((time % 3600) / 60);
    var s = Math.floor((time % 3600) % 60);

    var hDisplay = h >= 10 ? h : "0" + h;
    var mDisplay = m >= 10 ? m : "0" + m;
    var sDisplay = s >= 10 ? s : "0" + s;
    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  };

  const changeTime = (newTime) => {
    setTime(newTime);
  };
  return {
    time,
    start,
    stop,
    pause,
    resume,
    getInHours,
    changeTime,
    isStopwatchRunning,
  };
};

export default useStopwatch;
