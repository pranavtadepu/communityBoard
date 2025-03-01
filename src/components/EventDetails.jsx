// src/components/EventDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state || {}; // Get event details

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{event.title || "Event Details"}</h2>
      <img
        src={event.imageUrl}
        alt={event.title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{event.description}</p>

      {/* Buttons Section */}
      <div style={{ marginTop: "20px" }}>
        <button style={buttonStyle}>Register</button>
        <button style={buttonStyle}>Event Details</button>
        <button style={buttonStyle}>Other</button>
      </div>

      {/* Go Back Button */}
      <button
        style={{ ...buttonStyle, backgroundColor: "#007bff", marginTop: "10px" }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

// Button Style
const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default EventDetails;