import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

function Immersion() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2020/02/25/11/52/colombia-4878721_1280.jpg"
        title="RETREAT PROGRAM WITH LANGUAGE IMMERSION"
        buttonText="Learn With Us!"
        url="/courses"
        btnClass="show"
      />

      <Footer />
    </>
  );
}

export default Immersion;
