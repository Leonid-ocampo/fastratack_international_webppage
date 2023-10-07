import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Propuesta from "../components/propuesta/Propuesta";
import Footer from "../components/footer/Footer";

import imagen2 from "../assets/clase1.jpg";

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero
          cName="hero"
          heroImg={imagen2}
          title="FASTRACK-LANGUAGES INTERNATIONAL"
          buttonText="Learn With Us!"
          url="/courses"
          btnClass="show"
        />
        <Propuesta />

        <Footer />
      </div>
    </>
  );
}

export default Home;
