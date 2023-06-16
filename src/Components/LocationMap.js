import React from "react";

function LocationMap() {
  return (
    <div className="map-container">
      <h2>Location Map</h2>
      <iframe
        title="Location Map"
        width="100%"
        height="400"
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default LocationMap;
