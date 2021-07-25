import React, { useContext, useState } from "react";
import style from "../styles/Box.module.css";
import { BoardContext } from "./BoardContext";
const Box = ({ id, value, setValue }) => {
  const solution = useContext(BoardContext);
  const [isWrong, setWrong] = useState(false);
  const [i, j] = id.split(" ").map((el) => parseInt(el));
  const checkValid = (value) => {
    if (value <= 0) return 0;
    else if (value > 9) return 9;
    else return value;
  };
  return (
    <div className={style.box}>
      {value !== 0 ? (
        value
      ) : (
        <input
          className={!isWrong ? style.inputbox : style.inputBoxWrong}
          min={1}
          max={9}
          type="number"
          onChange={(e) => {
            setValue(checkValid(parseInt(e.target.value)));
            if (value === solution[i][j]) setWrong(false);
            else setWrong(true);
          }}
        />
      )}
    </div>
  );
};

export default Box;
