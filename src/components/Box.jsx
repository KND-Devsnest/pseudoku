import React, { useContext, useEffect, useRef, useState } from "react";
import style from "../styles/Box.module.css";
import { BoardContext } from "./BoardContext";
import { GlobalContext } from "./GlobalContext";

const Box = ({ id, value, setValue, divideGrid, locked }) => {
  const { solution, isSelected, setSelected, puzzle } =
    useContext(BoardContext);
  const boxRef = useRef();
  const { dispatch } = useContext(GlobalContext);
  let classListHover = [style.inputbox];
  let classListWrong = [style.inputbox, style.incorrect];
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
    //console.log(puzzle);
  }, [value, i, j, puzzle, isSelected]);
  if (isSelected.i === i || isSelected.j === j || isSelected.value === value) {
    classListHover = [style.inputbox, style.correct];
    classListWrong = [style.inputbox, style.incorrect, style.correct];
  }
  if (locked) {
    classListHover.push(style.locked);
    classListWrong.push(style.locked);
  }
  return (
    <div className={style.box}>
      {
        <input
          ref={boxRef}
          onFocus={() => {
            dispatch({ type: "SET_BOARDREF", value: boxRef });
          }}
          className={
            isConflict ? classListWrong.join(" ") : classListHover.join(" ")
          }
          maxLength={1}
          type="number"
          disabled={locked}
          value={value > 0 ? value : ""}
          style={divideGrid(i, j)}
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
              setValue(parseInt(val), pval);
              e.target.value = val;
            } else {
              e.target.value = "";
              setValue(0);
            }

            setSelected({ i: i, j: j, value: val !== 0 ? val : -1 });
          }}
        />
      }
    </div>
  );
};

export default Box;
