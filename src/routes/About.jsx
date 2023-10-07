import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import AboutImg from "../assets/aboutus.jpg";
import Footer from "../components/footer/Footer";
import AboutComponent from "../components/about/AboutComponent";
import Slider from "../components/Slider";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About us" />
      <AboutComponent />
      <Slider />
      <Footer />
    </>
  );
}

export default About;
