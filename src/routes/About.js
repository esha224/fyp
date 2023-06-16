/*import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";*/
import AboutUs from "../Components/AboutUs";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../Components/Footer";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
