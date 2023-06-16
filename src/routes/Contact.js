/*import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";*/
import Contactus from "../Components/Contactus";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactImg from "../assets/Contact-us-banner.jpg";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        btnClass="hide"
      />
      <Contactus />
      <Footer />
    </>
  );
}

export default Contact;
