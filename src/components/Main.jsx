import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import Keypad from "./Keypad";
import Toolbox from "./Toolbox";
import { GlobalContext } from "./GlobalContext";
const Main = () => {
  return (
    <div className={style.main}>
      <GlobalContext.Provider>
        <Board />
        <div className={style.sidebar}>
          <Toolbox />
          <Keypad />
        </div>
      </GlobalContext.Provider>
    </div>
  );
};

export default Main;
