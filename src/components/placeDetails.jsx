import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";
import "./placeDetails.css";

const PlaceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const place = state?.place;

  if (!place) return <p className="error-text">No place data found.</p>;

 

  return (
    <div className="place-details-container">
      {/* Back button */}
      <div className="details-back-button">
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>

      {/* Images Gallery */}
      <div className="details-header">
        <div className="images-gallery">
          {place.images?.map((img, i) => (
            <img key={i} src={img} alt={`${place.name} ${i}`} />
          ))}
        </div>

        {/* Title */}
        <div className="text-block">
          <h2 className="details-title">{place.name}</h2>
          <h5 className="details-location"> 📍 {place.city}</h5>
          <h5 className="details-location-state"> 🚩 {place.state}</h5>
        </div>
      </div>

      {/* History */}
      {place.history && (
        <div className="details-section">
          <h3>History</h3>
          <p>{place.history}</p>
        </div>
      )}

      {/* Story */}
      <div className="details-section">
        <h3>Story</h3>
        <p>{place.story}</p>
      </div>

      {/* Facts */}
      {place.facts?.length > 0 && (
        <div className="details-section">
          <h3>Strange Facts</h3>
          <ul>
            {place.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      )}

      {/* {place.videoUrl && (
        <div className="details-section video-section">
          <h3>Unveil the Mystery</h3>
          <iframe
            src={place.videoUrl}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )} */}

      <Footer />
    </div>
  );
};

export default PlaceDetails;
