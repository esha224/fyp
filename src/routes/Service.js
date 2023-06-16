import React from "react";
import Navbar from "../Components/Navbar";
import ServiceImg from "../assets/blue.png";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import Hero from "../Components/Hero";
import "./ServiceStyles.css";

function Service() {
  const heroText = "Our Services";
  const heroSubtitle =
    " It is our Endeavor to provide top quality services to our valued customers to their entire requirement and satisfaction, through our After Sales Network across Pakistan.";
  ("Our Dealers’ workshops with skilled manpower to serve in all major cities are equipped with state of the art latest technology, tools & equipment's and technical manpower to handle conventional and Electronic Fuel Injection (EFI) system.Also we have some very important tips and public alerts for our esteemed customers. View here");

  ("021-111-SUZUKI (021-111-789-854)");
  (" SMS: 9891");
  ("customercentre@paksuzuki.com.pk");

  return (
    <>
      <Navbar />
      <div className="service-container">
        <Hero
          cName="hero-mid"
          heroImg={ServiceImg}
          title={heroText}
          subtitle={heroSubtitle}
          btnClass="hide"
        />

        <Trip />
      </div>
      <Footer />
    </>
  );
}

export default Service;
