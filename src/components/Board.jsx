import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "./Box";
import style from "../styles/Board.module.css";
import { BoardContext } from "./BoardContext";
import { GlobalContext } from "./GlobalContext";
import { data } from "../data/sudoku.json";
import { divideGrid } from "../utils/divideGrid";
const Board = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const boardRef = useRef();
  useEffect(() => {
    dispatch({ type: "SET_BOARDREF", value: boardRef });
  }, [boardRef, dispatch]);
  const randomElement = data[Math.floor(Math.random() * data.length)];
  const solution = randomElement.solution;
  const [puzzle, setPuzzle] = useState(randomElement.puzzle);
  const [isSelected, setSelected] = useState(false);
  return (
    <div ref={boardRef} className={style["sudoku-board"]}>
      <BoardContext.Provider
        value={{ isSelected, setSelected, solution, puzzle }}
      >
        {puzzle.map((el, i) => {
          return el.map((value, j) => {
            return (
              <Box
                key={`${i} ${j}`}
                id={`${i} ${j}`}
                value={puzzle[i][j]}
                divideGrid={divideGrid}
                setValue={(value) => {
                  setPuzzle((prevP) => {
                    prevP[i][j] = value;
                    console.log(prevP);
                    return prevP;
                  });
                }}
              />
            );
          });
        })}
      </BoardContext.Provider>

      {/* <button onClick={()=>console.log(puzzle)}>Click</button> */}
    </div>
  );
};

export default Board;
