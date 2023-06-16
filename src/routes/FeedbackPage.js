import React, { useState } from "react";
import feedbackBanner from "../assets/feedback.jpg";
import "./FeedbackPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function FeedbackPage() {
  const [salesType, setSalesType] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [complaintTime, setComplaintTime] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data, such as sending it to a server

    // Clear the form fields
    setSalesType("");
    setEmail("");
    setName("");
    setPhone("");
    setSelectedModel("");
    setComplaintTime("");
    setComplaintDescription("");
  };

  return (
    <>
      <Navbar />
      <div className="feedback-page">
        <img
          src={feedbackBanner}
          alt="Feedback Banner"
          className="feedback-banner"
        />
        <h1>Feedback Page</h1>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-block">
            <label htmlFor="salesType">Select a Sales Type:</label>
            <select
              id="salesType"
              value={salesType}
              onChange={(e) => setSalesType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          <div className="form-block">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-block">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-block">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-block">
            <label htmlFor="selectedModel">Select a Model:</label>
            <select
              id="selectedModel"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
              <option value="Model 3">Model 3</option>
            </select>
          </div>
          <div className="form-block">
            <label htmlFor="complaintTime">Select a Complaint Time:</label>
            <input
              type="datetime-local"
              id="complaintTime"
              value={complaintTime}
              onChange={(e) => setComplaintTime(e.target.value)}
            />
          </div>
          <div className="form-block">
            <label htmlFor="complaintDescription">Complaint Description:</label>
            <textarea
              id="complaintDescription"
              value={complaintDescription}
              onChange={(e) => setComplaintDescription(e.target.value)}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default FeedbackPage;
