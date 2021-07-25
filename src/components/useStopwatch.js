import { useState } from "react"


const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const start = () => {
        setTime(0);
        setIntervalId(setInterval(() => {
            setTime(pTime => pTime += 1)
        },1000));
    }

    const stop = () => {
        clearInterval(intervalId);

    }

    const pause = () => {
        clearInterval(intervalId);
    }

    const resume = () => {
        setIntervalId(setInterval(() => {
            setTime(pTime => pTime += 1)
        },1000));
    }

    const getInHours = () => {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 3600 % 60);

        var hDisplay = h > 10 ? h : "0"+h;
        var mDisplay = m > 10 ? m : "0"+m;
        var sDisplay = s > 10 ? s : "0"+s;
        return hDisplay + ":" + mDisplay + ":" + sDisplay;
    }

    return {time, start, stop, pause, resume, getInHours};
}

export default useStopwatch;