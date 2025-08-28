import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./places.css";
import Footer from "./footer";

const PlacesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { city, places } = location.state || { city: "", places: [] };

  return (
    <div className="places-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          MYSTERY <span>⛧</span> MAPPER
        </div>
        <ul className="navbar-links">
          <li onClick={() => navigate("/home")}>Home</li>
           <li onClick={() => navigate("/haunted")}>Dark Secrets</li>
          <li onClick={() => navigate("/explore")}>Explore</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>

      {/* Back Button (top-right corner) */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/explore")}>
          ← Back to Explore
        </button>
      </div>

      {/* Haunted Places Section */}
      <div className="haunted-places-section">
        <h2 className="places-heading">
          {city}'s Haunted Places
        </h2>
        <p className="places-subheading">
          "Whispers of the forgotten… echoes of the damned."
        </p>

        <div className="places-grid">
          {places.map((place) => (
            <div
              key={place.id}
              className="place-card"
              onClick={() => navigate(`/place/${place.id}`, { state: { place } })}
              style={{ cursor: "pointer" }}
            >
              <div className="place-image">
                <img
                  src={
                    place.images?.[0] ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={place.name}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
              <div className="place-content">
                <h3>{place.name}</h3>
                <p className="place-location">
                  📍 {place.city}, {place.state}
                </p>
                <p className="place-story">{place.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlacesPage;
