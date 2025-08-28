import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import "./about.css";

const AboutPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="about-page">
   
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


      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1>About Mystery Mapper</h1>
          <p>"Every map hides a secret… every secret hides a curse. We unveil them, one shadow at a time...."</p>
          <p>-----------------------------------------------------------------------------------------------------</p>
        </div>
      </section>

  
      <section className="about-content">
        <h2>* Who We Are *</h2>
        <p>
        <b>🕯️ Mystery Mapper is more than a website—it is a doorway into the forbidden.</b> <br />
          Here, the past refuses to stay buried: cursed dolls whisper in silence, 
          haunted castles breathe with ancient sorrow, black magic stirs in forgotten corners, 
          and Ouija boards open paths that should never be crossed. We gather these shadows, 
          trace their lingering presence, and map them—so you can wander where the living fear to tread. 👁️🌑
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🔮 Creepy but Curious</h3>
            <p>
             To journey beyond the ordinary, into realms where the eerie and the unexplained await.
            </p>
          </div>
          <div className="about-card">
            <h3>🕯️Mysterious</h3>
            <p>
              To uncover secrets whispered by shadows, and reveal places where the unknown still lingers.
            </p>
          </div>
          <div className="about-card warning">
            <h3>☠️ A Warning</h3>
            <p>
              Every story, every location, and every image carries a shadow. Enter
              with caution—because once you know the dark secrets, the darkness
              knows you too...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
