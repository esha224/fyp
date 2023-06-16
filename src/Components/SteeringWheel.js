import React, { useState } from "react";
import "./SteeringWheel.css";
import steeringWheelImg from "../assets/car.jpg";
import { Link } from "react-router-dom";

const SteeringWheel = ({ onBookCarClick, onPartsClick, onFeedbackClick }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleBookCarClick = () => {
    onBookCarClick();
    setIsOpened(false);
  };

  const handlePartsClick = () => {
    onPartsClick();
    setIsOpened(false);
  };

  const handleFeedbackClick = () => {
    onFeedbackClick();
    setIsOpened(false);
  };

  return (
    <div className="steering-wheel-container">
      <div
        className={`steering-wheel ${isOpened ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img
          className="steering-wheel-img"
          src={steeringWheelImg}
          alt="steering wheel"
        />
      </div>
      {isOpened && (
        <div className="list-container">
          <ul>
            <li>
              <button onClick={handleBookCarClick}>Book Your Suzuki</button>
            </li>
            <li>
              <button onClick={handlePartsClick}>Parts And Accessories</button>
            </li>
            <li>
              <button onClick={handleFeedbackClick}>Feedback</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SteeringWheel;
