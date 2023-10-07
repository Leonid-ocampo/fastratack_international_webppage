import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import contact from "../assets/contactus.jpg";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactform/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={contact} title="Contact us" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
