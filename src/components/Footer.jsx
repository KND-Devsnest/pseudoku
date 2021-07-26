import React from "react";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.leftbox}>
        <h2>About</h2>
        <p>This is a webapp created using react, by KND Team.</p>
      </div>
      <div className={style.leftbox}>
        <h2>Github</h2>

        <p>
          <a href="https://github.com/KND-Devsnest">Team KND</a>
        </p>
        <a href="https://github.com/destro1108">D3STRO</a>
        <a href="https://github.com/iHatePhysics">iHatePhysics</a>
        <a href="https://github.com/seebham">Keybored</a>
        <a href="https://github.com/aguyran">Soap</a>
        <a href="https://github.com/kaushikvrudhula">Flagged</a>
        <a href="https://github.com/Ritik947">TrickyMind</a>
      </div>
    </div>
  );
};

export default Footer;
