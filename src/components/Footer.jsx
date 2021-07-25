import React from "react";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.leftbox}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={style.leftbox}>
        <h2>Team KND</h2>
        <a href="#cta">
          <p>Github</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
