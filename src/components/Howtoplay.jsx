import React, { useState, useEffect } from "react";
import style from "../styles/Howtoplay.module.css";
import { rules } from "../data/rules.json";

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
