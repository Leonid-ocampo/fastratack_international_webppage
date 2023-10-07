import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImg from "../assets/courses.jpg";
import Footer from "../components/footer/Footer";
import Listacursos from "../components/listacursos/Listacursos";

function Courses() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Plans and Courses" />
      <Listacursos />
      <Footer />
    </>
  );
}

export default Courses;
