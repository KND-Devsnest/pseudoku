import React, { useContext } from "react";
import style from "../styles/Toolbox.module.css";
import { GlobalContext } from "./GlobalContext";
const Toolbox = ({ stopwatch }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const btnpressed = (x) => {
    //console.log(x);
    switch (x) {
      case "start":
        stopwatch.start();
        dispatch({ type: "SET_HAS_STARTED", value: true });
        break;
      case "pause":
        stopwatch.pause();
        dispatch({ type: "SET_IS_PAUSED", value: true });
        break;
      case "resume":
        stopwatch.resume();
        dispatch({ type: "SET_IS_PAUSED", value: false });
        break;
      case "undo":
        if (!state.hasStarted || state.isPaused) return;
        if (state.undoPuzzle) state.undoPuzzle();
        break;
      case "reset":
        if (!state.hasStarted || state.isPaused) return;
        if (state.resetPuzzle) state.resetPuzzle();
        break;
      case "hint":
        if (!state.hasStarted || state.isPaused || state.hintDisabled) return;
        if (state.hint) state.hint();
        stopwatch.changeTime(stopwatch.time + 20);
        //console.log("disabled");
        dispatch({ type: "SET_HINT_DISABLED", value: true });
        setTimeout(() => {
          //console.log("enabled");
          dispatch({ type: "SET_HINT_DISABLED", value: false });
        }, 10000);
        break;
      default:
        break;
    }
  };
  return (
    <div className={style.toolbox}>
      <div
        onClick={(e) => {
          btnpressed(
            stopwatch.isStopwatchRunning
              ? "pause"
              : state.hasStarted
              ? "resume"
              : "start"
          );
        }}
        className={`${style.startbtn} ${style.cta} `}
      >
        <h1>
          {stopwatch.isStopwatchRunning
            ? "Pause"
            : state.hasStarted
            ? "Resume"
            : "Start"}
        </h1>
      </div>
      <div className={style.misc}>
        <div
          onClick={(e) => {
            btnpressed("undo");
          }}
          className={`${style.cta} ${style.undobtn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-corner-up-left"
          >
            <polyline points="9 14 4 9 9 4" />
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
          </svg>
        </div>
        <div
          onClick={(e) => {
            btnpressed("reset");
          }}
          className={`${style.cta} ${style.resetbtn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-rotate-ccw"
          >
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </div>
        <div
          onClick={(e) => {
            btnpressed("hint");
          }}
          className={`${style.cta} ${style.hintbtn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={state.hintDisabled ? "#E50914" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
