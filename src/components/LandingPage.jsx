import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css"; // Import the CSS for styling
import bgForest from "../assets/images/bg-forest.jpg"; // Background Image

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const whatsappNumber = "918099869576"; // Replace with actual number
  const message = "Hey Vinod Shetty, can I get more details on this?"; // Pre-filled message
  const encodedMessage = encodeURIComponent(message);

  return (
    <section className="landing-page" style={{ backgroundImage: `url(${bgForest})` }}>
      {/* Overlay for readability */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <h1 className="title">Hello, I am Vinod Shetty</h1>
        <p className="subtitle">Welcome to My Professional Portfolio</p>

        {/* Navigation Menu Toggle for Mobile */}
        <div className="menu-toggle" onClick={handleToggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>

        {/* Navigation Links (Mobile Menu) */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="#about" className="btn primary">About Me</Link>
          <Link to="#works" className="btn secondary">My Works</Link>
          <Link to="#contact" className="btn primary">Contact Me</Link>
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp-btn"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Under Development Message */}
      <h3>Website is under development</h3>
    </section>
  );
};

export default LandingPage;
