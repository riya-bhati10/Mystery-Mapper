import React, { useEffect, useState } from 'react';
import './footer.css';

const facts = [
  '💀 Bhangarh Fort is officially the most haunted place in India.',
  '👻 GP Block in Meerut is known for ghostly gatherings of men drinking.',
  '🕯️ Dow Hill, Kurseong, echoes footsteps in empty corridors.',
  '🎃 Dumas Beach whispers tales of spirits and disappearances.',
  '🧟 Kuldhara village was abandoned overnight and is still cursed.',
];

const Footer = () => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About */}
        <div className="footer-section about">
          <h2>Mystery Mapper</h2>
          <p>
            Your gateway to the spookiest, most mysterious places in India. Explore haunted locations, untold legends, and chilling experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Dark Secrets</li>
            <li>Explore </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <input type="email" placeholder="Your email..." />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Spooky Fact Rotator */}
      <div className="footer-fact">{facts[currentFact]}</div>

      {/* Social & Credits */}
      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <p>🦇 Made by Riyaa | © 2025 Mystery Mapper</p>
      </div>
    </footer>
  );
};

export default Footer;
