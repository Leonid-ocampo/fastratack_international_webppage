import React from "react";
import "./TarjetaCurso.css";

function TarjetaCursoData(props) {
  return (
    <div className="tarjeta_datos">
      <h2>{props.heading}</h2>
      <div className="tarjeta_imagen">
        <img src={props.image} alt="imagenesvarias" />
      </div>
      <a
        className="BotonCurso"
        href={props.enlace}
      >
        <button>{props.button}</button>
      </a>
    </div>
  );
}

export default TarjetaCursoData;
