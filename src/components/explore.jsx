
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";
import Footer from "./footer";

const hauntedPlaces = [
  {
    name: "Bhangarh Fort",
    location: "Rajasthan, India",
    img: "https://images.unsplash.com/photo-1572944930438-50d50a3963e6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmhhbmdhcmglMjBmb3J0JTJDJTIwYmhhbmdhcmglMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Shaniwarwada Fort",
    location: "Pune, Maharashtra",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/shaniwar-wada-pune-maharashtra-1-attr-hero?qlt=82&ts=1742184639448",
  },
  {
    name: "Dow Hill",
    location: "Kurseong, West Bengal",
    img: "https://assets.telegraphindia.com/telegraph/13nblttdowhillcut(2).jpg",
  },
  {
    name: "Agrasen ki Baoli",
    location: "Delhi, India",
    img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2025/06/28/4012725-tourist-places-in-delhi.png?im=FitAndFill=(1200,900)",
  },
  {
    name: "Ramoji Film City",
    location: "Hyderabad, India",
    img: "https://static2.tripoto.com/media/filter/tst/img/1989638/TripDocument/1590084751_ramoji_film_city.jpg",
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [placesFound, setPlacesFound] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!destination.trim()) return;
    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch("/haunted_places.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const normalize = (str) => str.toLowerCase().replace(/\s+/g, "");
      const searchTerm = normalize(destination);

      const filtered = data.filter((place) => {
        const cityMatch = normalize(place.city).includes(searchTerm);
        const stateMatch = normalize(place.state).includes(searchTerm);
        return cityMatch || stateMatch;
      });

      setPlacesFound(filtered);
    } catch (error) {
      console.error("Error loading JSON:", error);
      setPlacesFound([]);
    }

    setLoading(false);
  };

  const handleViewPlaces = () => {
    if (!destination || placesFound.length === 0) return;
    navigate("/places", { state: { city: destination, places: placesFound } });
  };

  return (
    <div className="explore-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          MYSTERY <span>⛧</span> MAPPER
        </div>
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/haunted")}>Dark Secrets</li>
          <li onClick={() => navigate("/explore")}>Explore</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>

      {/* Search Section */}
      <div className="search-bg">
        <div className="search-section">
          <h1>SEARCH THE PLACE YOU WANT TO EXPLORE</h1>
          <input
            type="text"
            placeholder="Search Any State in India...."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-container">
        {loading && <p>Loading haunted places...</p>}

        {!loading && searched && (
          <>
            {placesFound.length > 0 ? (
              <div className="places-found-box">
                <p>
                  🕯️ Found <strong>{placesFound.length}</strong> haunted
                  place(s) in <strong>{destination}</strong>
                </p>
                <button
                  className="view-places-button"
                  onClick={handleViewPlaces}
                >
                  View the Places
                </button>
              </div>
            ) : (
              <p>⚰️ No haunted places found in {destination}.</p>
            )}
          </>
        )}
      </div>

      {/* Static Haunted Places Section */}
      <div className="static-haunted-section">
        <h2>Most Horrifying Places in India</h2>
        <div className="haunted-places-grid">
          {hauntedPlaces.map((place, index) => (
            <div key={index} className="haunted-card">
              <img src={place.img} alt={place.name} className="haunted-img" />
              <h3>{place.name}</h3>
              <p>{place.location}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExplorePage;
