import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import Keypad from "./Keypad";
import Toolbox from "./Toolbox";
import { GlobalProvider } from "./GlobalContext";
const Main = () => {
  return (
    <div className={style.main}>
      <GlobalProvider>
        <Board />
        <div className={style.sidebar}>
          <Toolbox />
          <Keypad />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default Main;
