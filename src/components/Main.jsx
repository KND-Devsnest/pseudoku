import React from "react";
import Board from "./Board";
import style from "../styles/Main.module.css";
import { GlobalProvider } from "./GlobalContext";
import Sidebar from "./Sidebar";

const Main = ({ randomElement }) => {
  return (
    <div className={style.main}>
      <GlobalProvider>
        <Board randomElement={randomElement} />
        <Sidebar />
      </GlobalProvider>
    </div>
  );
};

export default Main;
