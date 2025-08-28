import React from 'react';
import './EntryPage.css';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="entry-container">
      <div className="entry-overlay">
        <div className="entry-title-wrapper">
          <img src="/skull-with-lightning.png" alt="Skull Icon" className="skull-icon" />
           <h1 className="entry-title">
            <span className="first-letter">M</span>YSTERY MAPPER
            <div className="entry-subtitle">EXPLORE MYSTERY PLACES WITH US</div>
          </h1>
          <button className="entry-button" onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Entry;
