import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from 'react-starfield';
import './index.css'


const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app-container">
      <div className="typewriter">
        <h1>Welcome to WoCCode Nova 2025</h1>
      </div>

      {/* Jump-to Box */}
      <nav className="nav-links">
        <a href="#overview">Overview</a>
        <a href="#schedule">Schedule</a>
        <a href="#prompts">Hackathon Prompts</a>
      </nav>

      {/* Starfield */}
      <Starfield
        starCount={1000}
        starColor={[256, 256, 256]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      {/* Sections */}
      <section id="overview" className="section">
        <h2>Overview</h2>
        <p>
        WoCCode invites you to WoC|CodeNova, a 1.5 day space-themed hackathon designed in preparation for the 2025 NASA Space Apps challenge. WoCCode is a network for people who don’t fit the tech stereotype. We welcome participants of all experience levels, from beginners to advanced programmers. This event is an opportunity to apply your technical skills, collaborate with peers, and develop creative projects using publicly available datasets from satellites and astronomical archives.


        </p>
      </section>

      <section id="schedule" className="section">
        <h2>Schedule</h2>
        <ul>
          <li>Opening Ceremony</li>
          <li> Team Formation</li>
          <li>Hacking Begins</li>
          <li> Dinner Break</li>
          <li> Project Submissions</li>
          <li> Closing & Awards</li>
        </ul>
      </section>

      <section id="prompts" className="section">
        <h2>Hackathon Prompts</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
          elementum imperdiet. Duis sagittis ipsum.
        </p>
      </section>
    </div>
  );
};

export default App;
