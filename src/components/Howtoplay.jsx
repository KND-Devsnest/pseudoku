import React, { useState, useEffect } from "react";
import style from "../styles/Howtoplay.module.css";
const rules = [
  {
    content:
      "Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 “squares” (made up of 3 x 3 spaces). Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square. Does it sound complicated? As you can see from the image below of an actual Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces filled in, the easier the game – the more difficult Sudoku puzzles have very few spaces that are already filled in.",
    text: "Use Numbers 1-9",
  },
  {
    content:
      "As you can see, in the upper left square (circled in blue), this square already has 7 out of the 9 spaces filled in. The only numbers missing from the square are 5 and 6. By seeing which numbers are missing from each square, row, or column, we can use process of elimination and deductive reasoning to decide which numbers need to go in each blank space.For example, in the upper left square, we know we need to add a 5 and a 6 to be able to complete the square, but based on the neighboring rows and squares we cannot clearly deduce which number to add in which space. This means that we should ignore the upper left square for now, and try to fill in spaces in some other areas of the grid instead.",
    text: "Don’t Repeat Any Numbers",
  },
  {
    content:
      " Sudoku is a game of logic and reasoning, so you shouldn’t have to guess. If you don’t know what number to put in a certain space, keep scanning the other areas of the grid until you seen an opportunity to place a number. But don’t try to “force” anything – Sudoku rewards patience, insights, and recognition of patterns, not blind luck or guessing.",
    text: "Don’t Guess",
  },
  {
    content:
      "What do we mean by using “process of elimination” to play Sudoku? Here is an example. In this Sudoku grid (shown below), the far left-hand vertical column (circled in Blue) is missing only a few numbers: 1, 5 and 6.One way to figure out which numbers can go in each space is to use “process of elimination” by checking to see which other numbers are already included within each square – since there can be no duplication of numbers 1-9 within each square (or row or column).",
    text: "Use Process of Elimination",
  },
];

/*Contains the structure explaining the how to's of sudoku*/

const Howtoplay = () => {
  const [content, setContent] = useState(rules[0].content);
  return (
    <div className={style.wrapper}>
      <h1 id="head1">How To Play?</h1>
      <div className={style.howtoplay}>
        <div className={style.rulewrapper}>
          {rules.map((element, inx) => (
            <p
              key={inx}
              className="unordered"
              onClick={(e) => setContent(element.content)}
            >
              {element.text}
            </p>
          ))}
        </div>
        <div className={style.contentwrapper}>{content}</div>
      </div>
    </div>
  );
};
export default Howtoplay;
