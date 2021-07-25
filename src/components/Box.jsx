import React, { useContext, useEffect, useState } from "react";
import style from "../styles/Box.module.css";
import { BoardContext } from "./BoardContext";
const Box = ({ id, value, setValue }) => {
  const { solution, isSelected, setSelected, puzzle } =
    useContext(BoardContext);
  const [isWrong, setWrong] = useState(false);
  const classListHover = [style.inputbox, style.correct];
  const classListWrong = [style.inputbox, style.incorrect];
  const [isConflict, setConflict] = useState(false);
  const [i, j] = id.split(" ").map((el) => parseInt(el));
  useEffect(() => {
    setConflict(false);
    for (let k = 0; k < 9; k++) {
      if (k === i || value === 0 || !value) continue;
      if (value === puzzle[k][j]) setConflict(true);
    }
    for (let k = 0; k < 9; k++) {
      if (k === j || value === 0 || !value) continue;
      if (value === puzzle[i][k]) setConflict(true);
    }
    function isBoxSafe() {
      let rstart = 3 * Math.floor(i / 3);
      let rend = rstart + 3;
      let cstart = 3 * Math.floor(j / 3);
      let cend = cstart + 3;
      for (let k = rstart; k < rend; k++) {
        for (let l = cstart; l < cend; l++) {
          if (value === 0 || !value) continue;
          if (i !== k && j !== l && puzzle[i][j] === puzzle[k][l]) {
            setConflict(true);
          }
        }
      }
    }
    isBoxSafe();
    console.log(puzzle);
  });
  if (isConflict) console.log("test");
  return (
    <div
      className={
        isSelected.i === i || isSelected.j === j || isSelected.value === value
          ? style.boxSelect
          : style.box
      }
    >
      {
        <input
          className={isConflict ? style.incorrect : classListWrong.join(" ")}
          maxLength={1}
          type="number"
          value={value > 0 ? value : ""}
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

            if (!isNaN(val) && val > 0 && val !== pval) {
              setValue(parseInt(val));
              e.target.value = val;
            } else {
              e.target.value = "";
              setValue(0);
            }
            if (val === solution[i][j]) setWrong(false);
            else setWrong(true);

            setSelected({ i: i, j: j, value: val !== 0 ? val : -1 });
          }}
        />
      }
    </div>
  );
};

export default Box;
