import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "./Box";
import style from "../styles/Board.module.css";
import { BoardContext } from "./BoardContext";
import { GlobalContext } from "./GlobalContext";
import { divideGrid } from "../utils/divideGrid";

const Board = ({ randomElement }) => {
  const { dispatch, state } = useContext(GlobalContext);
  const { hasStarted, isPaused } = state;
  const [isFinished, setFinished] = useState(false);
  const boardRef = useRef();
  const firefoxRef = useRef(false);

  useEffect(() => {
    firefoxRef.current = window.navigator.userAgent.indexOf("Firefox") > -1;
  }, []);
  // useEffect(() => {
  //   dispatch({ type: "SET_BOARDREF", value: boardRef });
  // }, [boardRef, dispatch]);
  const solution = randomElement.solution;
  const [puzzle, setPuzzle] = useState(
    JSON.parse(JSON.stringify(randomElement.puzzle))
  );
  let temp = 0;
  if (!isFinished) {
    puzzle.forEach((i, row) => {
      i.forEach((el, col) => {
        if (el === solution[row][col]) temp++;
        if (temp === 81) {
          setFinished(true);
          alert("You Won");
        }
      });
    });
  }
  if (isFinished) console.log("YOU WON");
  const [isSelected, setSelected] = useState(false);
  const [done, setDone] = useState([]);
  // console.log(done);
  useEffect(() => {
    const Hint = () => {
      let unguessed_number = [];
      for (let i = 0; i < 9 && unguessed_number.length < 10; i++)
        for (let j = 0; j < 9 && unguessed_number.length < 10; j++) {
          if (puzzle[i][j] === 0) unguessed_number.push({ x: i, y: j, val: 0 });
        }
      const hint =
        unguessed_number[Math.floor(Math.random() * unguessed_number.length)];
      hint["solution"] = solution[hint.x][hint.y];
      console.log(hint);
      setDone((pDone) => {
        return [...pDone, { x: hint.x, y: hint.y, val: hint.val }];
      });
      setPuzzle((prevP) => {
        prevP[hint.x][hint.y] = hint.solution;
        //console.log(prevP);
        return prevP;
      });
    };
    const undoPuzzle = () => {
      if (done.length === 0) return;
      let { x, y, val } = done.pop();
      let prev = done.length >= 1 ? done[done.length - 1] : false;
      setDone(done);
      setSelected({
        i: prev.x,
        j: prev.y,
        value: prev.val !== 0 ? prev.val : -1,
      });
      let prevP = puzzle;
      prevP[x][y] = val;
      //console.log(prevP);
      setPuzzle(prevP);
    };
    const resetPuzzle = () => {
      //console.log(randomElement.puzzle);
      setPuzzle(JSON.parse(JSON.stringify(randomElement.puzzle)));
      setSelected(false);
      setDone([]);
    };
    dispatch({ type: "SET_RESET_PUZZLE", value: resetPuzzle });
    dispatch({ type: "SET_HINT_PUZZLE", value: Hint });
    dispatch({ type: "SET_UNDO_PUZZLE", value: undoPuzzle });
  }, [dispatch, done, puzzle, randomElement.puzzle]);

  // console.log(puzzle);
  return (
    <div
      ref={boardRef}
      className={`${style["sudoku-board"]} ${
        hasStarted && !isPaused ? null : `${style.disabled}`
      } ${firefoxRef.current ? `${style.forFirefox}` : null}`}
    >
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
                locked={randomElement.puzzle[i][j] !== 0}
                setValue={(value, prevVal) => {
                  setDone((pDone) => {
                    return [...pDone, { x: i, y: j, val: prevVal }];
                  });
                  setPuzzle((prevP) => {
                    prevP[i][j] = value;
                    //console.log(prevP);
                    return prevP;
                  });
                }}
              />
            );
          });
        })}
      </BoardContext.Provider>

      {/* <button onClick={()=>console.log(puzzle)}>Click</button> */}

      {/* Overlay on the Board while the game hasn't started yet or is paused */}
      <div
        className={`${style.overlay} ${
          state.hasStarted && !state.isPaused
            ? null
            : `${firefoxRef ? `${style.forFirefox}` : `${style.overlayShow}`}`
        }`}
      >
        {!state.hasStarted
          ? "Press Start to Play!"
          : state.isPaused
          ? "Paused"
          : ""}
      </div>
    </div>
  );
};

export default Board;
