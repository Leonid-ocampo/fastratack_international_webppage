import React from "react";
import { Link } from "react-router-dom";
import "../../components/listacursos/Listacursos.css";
import imgespañol from "../../assets/espanol.jpg";
import imgingles from "../../assets/ingles.png";
import imgfrances from "../../assets/frances.png";
import imgitaliano from "../../assets/italiano.jpg";
import Espanol from "./Espanol";

const Listacursos = () => {
  return (
    <div className="container">
      <div iv className="grupocursostarjetas">
        {/*tarjeta para español */}
        <div className="curso-tarjeta">
          <img className="imagen-tarjeta" src={imgespañol} alt="español" />
          <div className="contenido-curso">
            <h1 className="titulo-curso">Español</h1>
            <p className="texto-curso">
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>
            <button className="botonIdioma">
              <Link to="español">Learn More!</Link>
            </button>
          </div>
        </div>

        {/*tarjeta para Ingles */}
        <div className="curso-tarjeta">
          <img className="imagen-tarjeta" src={imgingles} alt="Ingles" />
          <div className="contenido-curso">
            <h1 className="titulo-curso">Ingles</h1>
            <p className="texto-curso">
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>

            <button className="botonIdioma">
              <Link to="español">Learn More!</Link>
            </button>
          </div>
        </div>

        {/*tarjeta para Italiano */}
        <div className="curso-tarjeta">
          <img className="imagen-tarjeta" src={imgitaliano} alt="Italiano" />
          <div className="contenido-curso">
            <h1 className="titulo-curso">Italiano</h1>
            <p className="texto-curso">
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>

            <button className="botonIdioma">
              <Link to="español">Learn More!</Link>
            </button>
          </div>
        </div>

        {/*tarjeta para Frances */}
        <div className="curso-tarjeta">
          <img className="imagen-tarjeta" src={imgfrances} alt="Frances" />
          <div className="contenido-curso">
            <h1 className="titulo-curso">Frances</h1>
            <p className="texto-curso">
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>

            <button className="botonIdioma">
              <Link to="español">Learn More!</Link>
            </button>
          </div>
        </div>
      </div>

      {/*<nav className="tarjetanavegacion">
        <div className="card">
          <h2>Español</h2>
          <div>
            <img src={imgespañol} alt="español" />
          </div>
          <div className="card-content">
            <p>
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>
            <button className="botonIdioma">
              <Link to="español">Learn More!</Link>
            </button>
          </div>
        </div>

        <div className="card">
          <h2>English</h2>
          <div>
            <img src={imgingles} alt="ingles" />
          </div>
          <div className="card-content">
            <p>
              "Our online and in person group Spanish classes meet once a week
              for 1 hour. Our approach to learning is a blend between a formal
              approach focused on grammar and the basic structure of the
              language and an interactive approach geared toward situations that
              promote verbal interaction among the students while building up
              vocabulary. The primary focus of our group's classes is
              conversation."
            </p>
            <button className="botonIdioma">
              <Link to="ingles">Learn More!</Link>
            </button>
          </div>
        </div>

      
  </nav>*/}
    </div>
  );
};

export default Listacursos;
