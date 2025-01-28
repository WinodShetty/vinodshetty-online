import React from "react";
import "../styles/aboutMe.css"; // About Me page styles

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="content">
        <p>
          I’m Vinod Shetty, a web developer passionate about building websites that are not just functional but also sustainable and eco-friendly.
        </p>
        <p>
          I enjoy creating websites with nature-inspired designs, earthy colors, and smooth animations.
        </p>
        <img 
          src="src\assets\images\profile.jpg" 
          alt="Vinod Shetty" 
          className="profile-image" 
        />
      </div>
    </section>
  );
};

export default AboutMe;
