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
	  <a href="#tutorials">Talks & Tutorials</a>
	  <a href="#solutions">Solutions</a>
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
            WoC|CodeNova is a space-themed hackathon designed in preparation for the 2025 <a href="https://www.spaceappschallenge.org/">NASA Space Apps challenge</a>. We have selected three prompts from prior NASA Space Apps challenges to attack in this 1.5 day event. This is an opportunity to apply your technical skills, collaborate with peers, and develop creative projects using publicly available datasets from satellites and astronomical archives.

	    WoCCode is a network for people who don’t fit the tech stereotype. We welcome participants of all experience levels, from beginners to advanced programmers. The primary aim of WoCCode is to provide a low-pressure and judgement-free environment to learn and develop coding skills.

        </p>
      </section>

      <section id="schedule" className="section">
          <h2>Schedule</h2>

	  <h3>Friday, CCCB Room 3420</h3>
	      <li> 5:00 Dinner and mingling </li>
              <li> 5:30 Introductory remarks and kick-off</li>
              <li> 6:15 Team Formation </li>
              <li> 7:00 Tutorial: Accelerating your project with AI </li>
              <li> 7:30 Hacking </li>
              <li> 10:00 Vacate CCCB</li>
	  <h3>Saturday, CCCB Room 3420</h3>
	      <li>9:00 Breakfast & hacking</li>
	      <li>11:30 Break for lunch</li>
	      <li>12:00 Remote talk and Q&A with NASA program officer</li>
	      <li>1:00 Hacking </li>
	      <li>4:00 Project presentations & light dinner </li>
	      <li>5:15 Award presentations and wrap-up</li>
	      <li>6:00 Vacate CCCB</li>
      </section>

      <section id="prompts" className="section">
          <h2>Hackathon Prompts</h2>

	  <h3><a href="https://www.spaceappschallenge.org/2023/challenges/magnetic-reconnection/">Understanding geomagnetic storms</a></h3>
        <p>
            Magnetic reconnection (MR) is a process in which opposing magnetic field lines merge. If magnetic reconnection occurs between the interplanetary magnetic field (IMF) and Earth’s magnetic field, solar-wind plasma particles are permitted to enter the region of space near Earth (the geospace), potentially causing space weather events that could impact satellites in Earth orbit, as well as power systems on Earth. <b>Your challenge is to develop a computer program for the public that analyzes the IMF vector components measured by spacecraft to assess how often magnetic reconnection occurs.</b>
        </p>
	  <p>
	      <b>Additional Resources:</b> WoCCode mentors have collected additional background information and links to datasets that are relevant to this problem. <a href="https://docs.google.com/document/d/1KF9RZIckRYNorFPHsS8QueRTGVMiLZF5772u8WyVDNo/edit?usp=sharing">Click here to see it.</a>
	  </p>
	  <h3><a href="https://www.spaceappschallenge.org/2023/challenges/immersed-in-the-sounds-of-space/">Immersed in the sounds of space</a></h3>
          <p>
	      NASA offers a variety of “sonifications” – translations of 2D astronomical data into sound –that provide a new way to experience imagery and other information from space. Advanced instruments currently provide hyperspectral (many color) images from space that are 3D (two spatial dimensions and one color dimension), and sophisticated techniques can be used to enhance 2D astronomical images to make video representations called “fly-throughs” that allow viewers to experience what it would look like to move among space objects in 3D (three simulated spatial dimensions). <b>Your challenge is to design a method to create sonifications of these 3D NASA space datasets to provide a different perceptual path that can help us understand and appreciate the wonders of the universe!</b>
        </p>
	  <h3><a href="https://www.spaceappschallenge.org/2023/challenges/titan-city-3023/">Titan city, 3023</a></h3>
        <p>
	    We are only just beginning to consider long-term habitation on the Moon and Mars, but what would be required in the distant future for successful exploration of even more remote planets or the icy moons of the gas giants, such as Saturn’s moon Titan? <b>Your challenge is to create an educational game (digital or analog) that poses these challenges, explores potential solutions, and inspires new generations of space explorers.</b>
        </p>
	  <p>
	      <b>Additional Resources:</b> WoCCode mentors have developed a presentation and tutorial on how to build a simple game with Python. <a href="https://docs.google.com/presentation/d/10ecbYkOtQX9H_34ebueB-p5qc65-gWaM/edit?usp=sharing&ouid=112930188907121714732&rtpof=true&sd=true">Click here</a> to see the presentation slides and <a href="https://drive.google.com/drive/folders/1Hj2bDt-gArvZZMcWFokk7m7KYVWl4kBu?usp=sharing">go here</a> to collect the necessary python code.
	  </p>
      </section>

      <section id="tutorials" className="section">
          <h2>Talks & Tutorials</h2>

	  <p><a href="https://docs.google.com/presentation/d/1_Gi3rvHKFnc8HypE89Xk0GMiACGqb-1qsmUOyYYuvX0/edit?usp=sharing">Orientation Slides</a></p>

	  <p><a href="/woccodenova-2025/tutorial.pdf">AI Tutorial: Using Cursor to accelerate your coding</a></p>

	  <p><a href="https://docs.google.com/presentation/d/1d5SJbLfe_zo9ln-82XoCFPfg7384mbInDHuWyppwLKg/edit?usp=sharing">Open Source Software and NASA</a>, Talk by Dr. Steve Crawford, Senior Program Executive</p>
      </section>

	<section id="solutions" className="section">
	    <h2>Solutions</h2>

	    <p><b><a href="https://github.com/kgozman6159/cosmic-composers">Cosmic Composers</a>: Katja, Thab, Akshey, Shruti, Yunwoo, Vital (mentor)</b></p>

	    <p><b><a href="https://github.com/Linvicky0/titan-3023">Titanauts</a>: Vicky, Qing, Camilla, Xinyue, Stiffany, Jamila (mentor), Amara (mentor)</b></p>
	</section>

    </div>
  );
};

export default App;
