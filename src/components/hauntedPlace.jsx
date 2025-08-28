import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer"; 
import "./hauntedPlace.css";

const HauntedPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // For Vite, import images using import.meta.glob
  const imageModules = import.meta.glob('/public/banglow-*.*', { eager: true, as: 'url' });
  const images = Object.values(imageModules);

  const [shuffled, setShuffled] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffled((prev) => {
        const copy = [...prev];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="haunted-page">
     
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
          <li onClick={() => navigate("/explore")}>Explore </li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">"DARE TO WALK AMONG THE CURSED"</h2>
          <p className="hero-subtitle"> 🦇The darkness watches… and remembers. </p>
          <p className="hero-subtitle"> Your footsteps are already marked.👣☠️</p>
        </div>
      </section>

     <section className="haunted-grid-section">
       {/* First Row: Image + Content */}
       <div className="haunted-row">
         <div className="haunted-image">
           <img src="/black-magic-doll.png" alt="Cursed Ruins" />
         </div>
         <div className="haunted-content">
           <h3>THE CURSED TRUTH: BLACK MAGIC IS REAL 🔮</h3>
           <p>"🕯️ They say shadows move where no light should be… <br />
                💀 Black magic breathes in silence, whispering through bones. <br />
                🩸 It drinks fear, binds souls, and calls the forgotten dead. <br />
                👁️ Once you've seen its gaze, the night itself follows you—
                and the darkness will never, ever let you leave."</p>
         </div>
       </div>
       
       {/* Second Row: Content + Image */}
       <div className="haunted-row">
         <div className="haunted-content">
           <h3>OUIJA: WHEN SPIRITS REPLY 🕯️</h3>
           <p>They say the board is just wood and letters… yet when the planchette begins to move, it feels like icy fingers dragging across your soul. Each question you ask is an invitation, and every answer carries the breath of something that was never meant to speak again. The silence between the knocks, the whispers behind the veil—once you hear them, you'll never walk in the dark alone… 👁️☠️</p>
         </div>
         <div className="haunted-image">
           <img src="/ouija-board.jpg" alt="Haunted Palace" />
         </div>
       </div>
     </section>

      {/* ===== SHUFFLE IMAGES SECTION ===== */}
      <section className="creepy-section">
        <h3 className="creepy-title">👁️ CURSED BANGLOWS 👁️</h3>
        <div className="creepy-row">
          {shuffled.map((img, index) => (
            <div key={index} className="creepy-img-wrapper">
              <img src={img} alt="Creepy" className="creepy-img flicker" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HauntedPage;