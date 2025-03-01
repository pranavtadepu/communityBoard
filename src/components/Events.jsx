import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../Events.css';
const Events = (props) =>{
    // const navigate = useNavigate();

      // State to show/hide event details
  const [showDetails, setShowDetails] = useState(false);

  // Toggle event details on button click
  const handleMoreDetails = () => {
    setShowDetails(!showDetails);
  };

    return (
      <div className="events">
        <img src={props.imageUrl} alt={props.title} className="card-image" />
        <div className="card-content">
          <h3>{props.title}</h3>
          <p className="card-cuisine">{props.cuisine}</p>
          <p>{props.description}</p>
          
  
          {/* "More Details" Button */}
          <button className="more-button" onClick={handleMoreDetails}>
            {showDetails ? "Hide Details" : "More Details"}
          </button>
  
          {/* Show Extra Details When "More Details" is Clicked */}
          {showDetails && (
            <div className="extra-buttons">
              <button className="extra-button">Register</button>
              <button className="extra-button">Event Details</button>
              <button className="extra-button">Other</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Events;