import React, { useContext, useState } from "react";
import style from "../styles/Box.module.css";
import { BoardContext } from "./BoardContext";
const Box = ({ id, value, setValue }) => {
  const { solution, isSelected, setSelected } = useContext(BoardContext);
  const [isWrong, setWrong] = useState(false);
  const xd = [style.inputBoxWrong, style.inputBoxSelect];
  const [isConflict, setConflict] = useState(false);
  const [i, j] = id.split(" ").map((el) => parseInt(el));

  if (isConflict) console.log("YES");
  return (
    <div
      className={
        isSelected.i === i || isSelected.j === j || isSelected.value === value
          ? style.boxSelect
          : style.box
      }
    >
      {value !== 0 ? (
        value
      ) : (
        <input
          className={
            isSelected.i === i ||
            isSelected.j === j ||
            isSelected.value === value
              ? style.inputBoxSelect
              : style.inputbox
          }
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
            console.log(isSelected);

            setSelected({ i: i, j: j, value: val !== 0 ? val : -1 });
          }}
        />
      )}
    </div>
  );
};

export default Box;
