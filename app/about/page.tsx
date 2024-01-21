"use client";

import React from "react";

import GaugeList from "../../components/Gauge";
import { EntryProps } from "../../components/Entry";

const techSkills = [
  { value: 85, title: "Typescript" },
  { value: 75, title: "PostGreSQL" },
  { value: 75, title: "Node.JS" },
  { value: 75, title: "Node.JS" },
  { value: 50, title: "AWS" },
];

const softSkills = [
  { value: 90, title: "Communication" },
  { value: 90, title: "Agility" },
  { value: 80, title: "Problem Solving" },
  { value: 70, title: "Collaboration" },
  { value: 80, title: "Leadership" },
];

const About: React.FC = () =>
{

  return (<section>
    <div>About Me</div>
    <div className="row">
      <div className="col"> TODO:
        <p> - Intersection animation</p>
        <p> - Click and Change color profile</p>
        <p> - Content Carousel</p>
        <p> - Display different content on click</p>
        <p> - Content</p>
      </div>
      <div className="col">
        <GaugeList data={techSkills} color="primary" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <GaugeList data={softSkills} color="secondary" />
      </div>
      <div className="col">
      </div>
    </div>
  </section>);
};

export default About;