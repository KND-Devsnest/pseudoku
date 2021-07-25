import React, { useContext, useState } from "react";
import style from "../styles/Box.module.css";
import { BoardContext } from "./BoardContext";
const Box = ({ id, value, setValue }) => {
  const solution = useContext(BoardContext);
  const [isWrong, setWrong] = useState(false);
  const [i, j] = id.split(" ").map((el) => parseInt(el));
  return (
    <div className={style.box}>
      {value !== 0 ? (
        value
      ) : (
        <input
          className={!isWrong ? style.inputbox : style.inputBoxWrong}
          maxLength={1}
          type="number"
          onKeyPress={(e) => {
            if (
              (e.which !== 8 && e.which !== 0 && e.which < 48) ||
              e.which > 57 ||
              e.which - 48 === e.target.value
            ) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            let val = e.target.value % 10;
            let pval = Math.floor((e.target.value % 100) / 10);
            console.log(pval);
            if (!isNaN(val) && val > 0 && val !== pval) {
              console.log(val);
              setValue(parseInt(val));
              e.target.value = val;
            } else {
              e.target.value = "";
              setValue(0);
            }
            if (val === solution[i][j]) setWrong(false);
            else setWrong(true);
          }}
        />
      )}
    </div>
  );
};

export default Box;
