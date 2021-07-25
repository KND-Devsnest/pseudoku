import React from "react";
import style from "../styles/Toolbox.module.css";
const Toolbox = () => {
  const btnpressed = (x) => {
    console.log(x);
  };
  return (
    <div className={style.toolbox}>
      <div
        onClick={(e) => {
          btnpressed("start");
        }}
        className={`${style.startbtn} ${style.cta} `}
      >
        <h1>Start</h1>
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
            stroke="currentColor"
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