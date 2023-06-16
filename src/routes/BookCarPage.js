import React, { useState } from "react";
import bannerPhoto from "../assets/book.jpg";
import Navbar from "../Components/Navbar";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";
import bike1 from "../assets/bike1.png";
import bike2 from "../assets/bike2.png";
import bike3 from "../assets/bike3.png";
import bike4 from "../assets/bike4.png";
import "./BookCarPage.css";
import Footer from "../Components/Footer";

const carsData = [
  { id: 1, name: "ALTO", image: car1 },
  { id: 2, name: "WAGONR", image: car2 },
  { id: 3, name: "CULTUS", image: car3 },
  { id: 4, name: "SWIFT", image: car4 },
  { id: 5, name: "BOLAN", image: car5 },
  { id: 6, name: "RAVI", image: car6 }
];

const automobilesData = [
  { id: 1, name: "GD 11OS", image: bike1 },
  { id: 2, name: "GS 150", image: bike2 },
  { id: 3, name: "GSX 125", image: bike3 },
  { id: 4, name: "GR 150", image: bike4 }
];

const BookCarPage = () => {
  const [selectedOption, setSelectedOption] = useState("automobiles");
  const [showCars, setShowCars] = useState(false);
  const [showAutomobiles, setShowAutomobiles] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleShowCars = () => {
    setShowCars(true);
    setShowAutomobiles(false);
  };

  const handleShowAutomobiles = () => {
    setShowAutomobiles(true);
    setShowCars(false);
  };

  return (
    <>
      <Navbar />
      <div className="book-car-page">
        <header>{/* Your header content */}</header>
        <div className="book-car-container">
          <div className="banner-photo">
            <img src={bannerPhoto} alt="Banner" />
          </div>
          <h1>Book Your Suzuki</h1>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="automobiles"
                checked={selectedOption === "automobiles"}
                onChange={handleOptionChange}
              />
              Motorbikes
            </label>
            <label>
              <input
                type="radio"
                value="cars"
                checked={selectedOption === "cars"}
                onChange={handleOptionChange}
              />
              Cars
            </label>
          </div>
          {selectedOption === "automobiles" && (
            <div className="automobiles-content">
              <h2>Motorbikes Content</h2>
              <button onClick={handleShowAutomobiles}>Show Bikes</button>
              {showAutomobiles && (
                <div className="automobiles-row">
                  {automobilesData.map((automobile) => (
                    <div key={automobile.id} className="automobile-block">
                      <img src={automobile.image} alt={automobile.name} />
                      <p>{automobile.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {selectedOption === "cars" && (
            <div className="cars-content">
              <h2>Cars Content</h2>
              <button onClick={handleShowCars}>Show Cars</button>
              {showCars && (
                <div className="cars-row">
                  {carsData.map((car) => (
                    <div key={car.id} className="car-block">
                      <img src={car.image} alt={car.name} />
                      <p>{car.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookCarPage;
