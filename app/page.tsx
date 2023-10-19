'use client'

import React from "react";
import "../styles/pages/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-picture">
        <img src="/mugshot.jpg" alt="Profile" />
      </div>
      <div className="content">
        <header>
          <h1>Welcome to My Portfolio</h1>
          <p>Software Engineer</p>
        </header>

        <section className="about-me">
          <h2>About Me</h2>
          <p className="typing-text anim-typewriter">
            I'm a passionate software engineer with a strong focus on creating
            meaningful and efficient solutions. Let's build the future together!
          </p>
        </section>

        <section className="recent-projects">
          <h2>Recent Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: example@email.com</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
        </section>
      </div>
    </div>
  );
};

