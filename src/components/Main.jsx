import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import Keypad from "./Keypad";
import Toolbox from "./Toolbox";
import { GlobalProvider } from "./GlobalContext";
import { data } from "../data/sudoku.json";
import useStopwatch from "../utils/useStopwatch";
const Main = () => {
  const stopwatch = useStopwatch();
  const randomElement = data[Math.floor(Math.random() * data.length)];
  return (
    <div className={style.main}>
      <GlobalProvider>
        <Board randomElement={randomElement} />
        <div className={style.sidebar}>
          <div className={style.stopwatch}>{stopwatch.getInHours()}</div>
          <Toolbox stopwatch={stopwatch} />
          <Keypad />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default Main;
