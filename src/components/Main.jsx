import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import Keypad from "./Keypad";
import Toolbox from "./Toolbox";
const Main = () => {
  return (
    <div className={style.main}>
      <Board />
      <div className={style.sidebar}>
        <Toolbox />
        <Keypad />
      </div>
    </div>
  );
};

export default Main;
