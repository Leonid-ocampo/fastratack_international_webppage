import React from "react";
import plaza1 from "../../assets/plaza cartagena.jpg";
import plaza2 from "../../assets/plaza.jpg";
import "./Propuesta.css";

const Propuesta = () => {
  return (
    <div className="Descripcioninicial">
      <h1>LANGUAGES</h1>
      <div className="Descripcion">
        <p>
          Our General courses are designed to improve your language skills and
          give you more personal, professional and academic options in the
          future. The course is semi-intensive and available at all levels from
          Elementary to Advanced, with classes made up of different levels. The
          focus is on the four main aspects of language: reading, writing,
          listening and speaking, and all our schools offer extensive and varied
          activities programs to help you make the most of your destination.
        </p>

        <div className="imagenesdescriptivas">
          <img src={plaza1} alt="plaza" />
          <img src={plaza2} alt="plaza" />
        </div>
      </div>
    </div>
  );
};

export default Propuesta;
