import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import Keypad from "./Keypad";
import Toolbox from "./Toolbox";
import { GlobalProvider } from "./GlobalContext";
import useStopwatch from "./useStopwatch";
const Main = () => {
  const stopwatch = useStopwatch();
  return (
    <div className={style.main}>
      <GlobalProvider>
        <Board />
        <div className={style.sidebar}>
          <div className={style.stopwatch}>
            {stopwatch.getInHours()}
          </div>
          <Toolbox stopwatch={stopwatch} />
          <Keypad />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default Main;
