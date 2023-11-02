'use client'

import React from "react";
import "../styles/pages/Home.css";

export default function Home() {
  return (
    <section>
      <div className="profile-picture rotating-border rotating-border--blue-back{">
        <img src="/mugshot.jpg" alt="Profile" />
      </div>
      <div className="content">
        <header>
          <h1>Welcome to My Portfolio</h1>
          <p>Software Engineer</p>
        </header>
          <h2>About Me</h2>
          <p className="typing-text anim-typewriter">
            I'm a passionate software engineer with a strong focus on creating
            meaningful and efficient solutions. Let's build the future together!
          </p>
      </div>
    </section>
  );
};

