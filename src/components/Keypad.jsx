import React from "react";
import style from "../styles/Keypad.module.css";
import { useState } from "react";
const Keypad = () => {
  const [number, setNumber] = useState(null);
  const btnclicked = (x) => {
    // HERE you will get what number is pressed on the Keypad!!
    console.log(x);
    setNumber(x);
    // replace document with the board div
    document.dispatchEvent(new KeyboardEvent('keypress',{key:x + ''}))
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
