import React from "react";
import "./ContactusStyles.css";
import LocationMap from "./LocationMap";
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="contact-form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Reason For Contacting:</label>
            <input type="text" id="reason" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4"></textarea>
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="contactus-container">
        <div className="location-details">
          <h2>Our Location</h2>
          <p>123 Example Street</p>
          <p>City, State</p>
          <p>Country</p>
        </div>
        <div className="location-map">
          <LocationMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
