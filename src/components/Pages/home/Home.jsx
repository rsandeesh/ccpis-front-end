import React from "react";
import "../../../App.css";
import Cards from "../../cards/Cards";
import HeroSection from "../../heroSection/HeroSection";
import Footer from "../../footer/Footer";
import Navbar from "../../navBar/Navbar";


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
