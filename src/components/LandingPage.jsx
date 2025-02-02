import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css"; // Import the CSS for styling
import bgForest from "../assets/images/bg-forest.jpg"; // Correct import path for the image

const LandingPage = () => {
  // WhatsApp phone number (with country code)
  const whatsappNumber = "918099869576"; // Example number (replace with your actual number)
  
  // Pre-filled message for WhatsApp chat
  const message = "Hey Vinod Shetty, can I get more details on this?";

  // URL encode the message to ensure it works in the URL
  const encodedMessage = encodeURIComponent(message);

  // Toggle for menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="landing-page" style={{ backgroundImage: `url(${bgForest})` }}>
      <div className="overlay">
        <div className="content">
          <h1 className="title">Hello, I am Vinod Shetty</h1>
          <p className="subtitle">Welcome to My Complex</p>
          <img 
          src="src\assets\images\profile.jpg" 
          alt="Vinod Shetty" 
          className="profile-image" 
        />
          
          {/* Toggle Bar Icon (for mobile view) */}
          <div className="toggle-bar" onClick={handleToggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Navigation buttons */}
          <div className={`nav-buttons ${menuOpen ? "show" : ""}`}>
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
        <h3>Website is under Development Thankyou</h3>
      </div>
    </section>
  );
};

export default LandingPage;
