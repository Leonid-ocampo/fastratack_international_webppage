import React from "react";
import TarjetaCursoData from "./TarjetaCursoData";
import Image1 from "../assets/espanol.jpg";
import Image2 from "../assets/italiano.jpg"
import Image3 from "../assets/ingles.png"
import Image4 from "../assets/frances.png"
import "./TarjetaCurso.css";

function TarjetaCurso() {
  return (
    <div className="tarjeta_grupo">
      <div className="tarjeta_Curso_individual">
        <TarjetaCursoData heading="Spanish" image ={Image1}
        enlace= <about/>/>
      </div>

      <div className="tarjeta_Curso_individual">
        <TarjetaCursoData heading="English" image ={Image3}
        enlace="https://www.fasttrack-languages.com/english/"
        button="Click Here"/>
      </div>

      <div className="tarjeta_Curso_individual">
        <TarjetaCursoData heading="French" image ={Image4}
        enlace="https://www.fasttrack-languages.com/french/"
        button="Click Here"/>
      </div>

      <div className="tarjeta_Curso_individual">
        <TarjetaCursoData heading="Italian" image={Image2}
        enlace="https://www.fasttrack-languages.com/italian/"
        button="Click Here"/>
      </div>
    
    </div>
  );
}

export default TarjetaCurso;
