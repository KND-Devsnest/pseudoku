import React from "react";
import style from "../styles/Box.module.css";
const Box = ({ value, setValue }) => {
  return (
    <div className={style.box}>
      {value !== 0 ? (
        value
      ) : (
        <input
          className={style.inputbox}
          type="number"
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
        />
      )}
    </div>
  );
};

export default Box;
