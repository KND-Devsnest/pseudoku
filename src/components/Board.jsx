import React, { useState } from "react";
import Box from "./Box";
import style from "../styles/Board.module.css";

const Board = () => {
  const solution = [
    [9, 7, 5, 8, 3, 1, 6, 4, 2],
    [3, 4, 8, 2, 6, 7, 1, 9, 5],
    [6, 2, 1, 5, 9, 4, 3, 8, 7],
    [1, 6, 9, 7, 4, 2, 8, 5, 3],
    [2, 5, 4, 3, 8, 6, 9, 7, 1],
    [7, 8, 3, 1, 5, 9, 2, 6, 4],
    [4, 1, 2, 9, 7, 8, 5, 3, 6],
    [8, 3, 6, 4, 2, 5, 7, 1, 9],
    [5, 9, 7, 6, 1, 3, 4, 2, 8],
  ];
  console.log(solution);
  const [puzzle, setPuzzle] = useState([
    [0, 0, 5, 0, 0, 1, 6, 0, 2],
    [3, 0, 8, 2, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 8, 0],
    [1, 6, 0, 0, 0, 0, 8, 5, 0],
    [2, 5, 0, 3, 0, 6, 0, 7, 1],
    [0, 8, 3, 0, 0, 0, 0, 6, 4],
    [0, 1, 0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 5, 7, 0, 9],
    [5, 0, 7, 6, 0, 0, 4, 0, 0],
  ]);

  console.log(puzzle);
  return (
    <div className={style["sudoku-board"]}>
      {puzzle.map((el, i) => {
        return el.map((value, j) => {
          return (
            <Box
              key={`${i} ${j}`}
              value={puzzle[i][j]}
              setValue={(value) => {
                setPuzzle((prevP) => {
                  prevP[i][j] = value;
                  return prevP;
                });
              }}
            />
          );
        });
      })}

      {/* <button onClick={()=>console.log(puzzle)}>Click</button> */}
    </div>
  );
};

export default Board;
