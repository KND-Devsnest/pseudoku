import React, { useContext } from "react";
import style from "../styles/Keypad.module.css";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
const Keypad = () => {
  const {state} = useContext(GlobalContext);
  console.log(state);
  const btnclicked = (x) => {
    // HERE you will get what number is pressed on the Keypad!!
    //console.log(x);
    // replace document with the board div
    if(state && state.boardRef){
      console.log('dispatched ',x);
      // state.boardRef.current.dispatchEvent(new KeyboardEvent('keydown',{key:x + ''}));
      
      let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(state.boardRef.current, x);
      var ev2 = new Event('input', { bubbles: true});
      state.boardRef.current.dispatchEvent(ev2);
    }
  };
  let btns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {/* temporary h1 could be removed */}
      {/* <h1>The Selected number from keypad: {number}</h1> */}
      {/* temporary h1 could be removed  */}
      <div className={style.keypad}>
        {btns.map((e, indx) => (
          <div
            key={indx}
            onClick={(e) => {
              btnclicked(indx + 1);
            }}
            className={style.btn}
            id={indx}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keypad;
