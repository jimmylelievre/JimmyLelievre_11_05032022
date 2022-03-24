import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerAbout from "../assets/bannerAbout.jpg";
import DropDownMenus from "../components/DropDownMenus";
import aboutText from "../assets/aboutText.json";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Banner img={bannerAbout} />
      <div className="about">
        <DropDownMenus name="Fiabilité" content={aboutText[0].fiabilite} />
        <DropDownMenus name="Respect" content={aboutText[0].respect} />
        <DropDownMenus name="Service" content={aboutText[0].service} />
        <DropDownMenus name="Sécurité" content={aboutText[0].securite} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
