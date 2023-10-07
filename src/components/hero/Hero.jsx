import React from "react";
import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="imagenfondo" src={props.heroImg} alt="grupo" />
        <div className="herotext">
          <h1>{props.title}</h1>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
