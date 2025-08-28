import React, { useState } from 'react';
import './home.css';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === Navbar === */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          MYSTERY <span>⛧</span> MAPPER
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/haunted')}>Dark Secrets</li>
          <li onClick={() => navigate('/explore')}>Explore </li>
          <li onClick={() => navigate('/about')}>About</li>
        </ul>
      </nav>

      {/* === Hero Section === */}
      <section className="hero-section-home">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              <span className="hero-line1">DISCOVER THE WORLD'S</span><br />
              <span className="hero-line2">DARKEST SECRETS</span>
            </h1>
            <p className="hero-subtitle">
              Real stories, creepy facts, and untold mysteries await in the shadows
            </p>
            <div className="hero-buttons">
              <button className="explore-btn" onClick={() => navigate('/explore')}>⚡ Explore Now</button>
            </div>
          </div>
        </div>
      </section>

    <Footer/>
    </>
  );
};

export default HomeHero;
