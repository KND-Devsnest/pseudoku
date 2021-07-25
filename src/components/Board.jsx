import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "./Box";
import style from "../styles/Board.module.css";
import { BoardContext } from "./BoardContext";
import { GlobalContext } from "./GlobalContext";
import { divideGrid } from "../utils/divideGrid";



const Board = ({randomElement}) => {
  const { dispatch } = useContext(GlobalContext);
  const boardRef = useRef();
  // useEffect(() => {
  //   dispatch({ type: "SET_BOARDREF", value: boardRef });
  // }, [boardRef, dispatch]);
  const solution = randomElement.solution;
  const [puzzle, setPuzzle] = useState(JSON.parse(JSON.stringify(randomElement.puzzle)));
  const [isSelected, setSelected] = useState(false);
  useEffect(()=>{
    const resetPuzlle = () => {
      console.log(randomElement.puzzle);
      setPuzzle(JSON.parse(JSON.stringify(randomElement.puzzle)))
      setSelected(false) 
    }
    dispatch({type:'SET_RESET_PUZZLE', value:resetPuzlle})},
    [dispatch, randomElement.puzzle]);

  //console.log(puzzle);
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
