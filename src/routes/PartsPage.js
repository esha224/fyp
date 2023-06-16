import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "./PartsPage.css";
import Footer from "../Components/Footer";
import blueBanner from "../assets/blue.png";
import categoryBody from "../assets/bodypart.jpg";
import categoryService from "../assets/kit.jpg";

const PartsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="parts-page">
        <div className="banner-container">
          <img
            src={blueBanner}
            alt="Suzuki Parts and Accessories"
            className="banner-img"
          />
          <div className="banner-text">Suzuki Parts and Accessories</div>
        </div>
        <div className="buttons-container">
          <div className="top-buttons">
            <button className="parts-button">Suzuki Genuine Parts</button>
            <button className="parts-button">Suzuki Genuine Accessories</button>
            <button className="parts-button">Suzuki Genuine Oil</button>
          </div>
          <div className="bottom-buttons">
            <button
              className={`parts-button ${
                selectedCategory === "body-parts" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("body-parts")}
            >
              Body Parts
            </button>
            <button
              className={`parts-button ${
                selectedCategory === "service-kit" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("service-kit")}
            >
              Service Kit
            </button>
          </div>
        </div>
        {selectedCategory === "body-parts" && (
          <div className="category-content">
            <h2>Body Parts Content</h2>
            <img
              src={categoryBody}
              alt="Body Parts"
              className="category-image"
            />
            {/* Add any additional content for Body Parts */}
          </div>
        )}
        {selectedCategory === "service-kit" && (
          <div className="category-content">
            <h2>Service Kit Content</h2>
            <img
              src={categoryService}
              alt="Service Kit"
              className="category-image"
            />
            {/* Add any additional content for Service Kit */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PartsPage;
