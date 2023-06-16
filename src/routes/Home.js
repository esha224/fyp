import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HomeImg1 from "../assets/white.jpg";
import HomeImg2 from "../assets/swace.jpg";
import HomeImg3 from "../assets/canal.jpg";

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <>
      <Navbar />
      <Slider {...sliderSettings}>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg1}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            subtitle="hide"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg2}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg3}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
      </Slider>

      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
