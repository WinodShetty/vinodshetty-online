import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";
import ContactMe from "./components/ContactMe";
import "./styles/global.css"; // Global styles

function App() {
  return (
    <Router>
      {/* Navigation Bar
      <nav className="navbar">
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/works">My Works</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<AboutMe />} />
        <Route path="/works" element={<MyWorks />} />
        <Route path="/contact" element={<ContactMe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
