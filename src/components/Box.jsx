import React from "react";
import style from "../styles/Box.module.css";
const Box = ({ value, setValue }) => {
  return (
    <div className={style.box}>
      {value !== 0 ? (
        <div>{value}</div>
      ) : (
        <input
          className={`${style.inputbox}`}
          type="text"
          min="1"
          max="9"
          maxLength="1"
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
        />
      )}
    </div>
  );
};

export default Box;
