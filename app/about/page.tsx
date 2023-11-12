'use client'

import React from "react";

import GaugeList from "../../components/Gauge";
import { EntryProps } from "../../components/Entry";

const techSkills = [
  { value: 85, title: 'Javascript' },
  { value: 75, title: 'PostGreSQL' },
  { value: 75, title: 'Node.JS' },
  { value: 75, title: 'Node.JS' },
  { value: 50, title: 'AWS' },
];

const softSkills = [
  { value: 90, title: 'Communication' },
  { value: 90, title: 'Agility' },
  { value: 80, title: 'Problem Solving' },
  { value: 70, title: 'Collaboration' },
  { value: 80, title: 'Leadership' },
];

/*JavaScript (ExpressJS, VueJS, Jest), PostgreSQL, HTML5/CSS, AWS, Docker, K8, Agile (SCRUM, Kanban), Git, Consulting, Communication, Complex Problem Solving, Presentation, Requirement Elicitation*/

const About: React.FC = () => {

  const blogData: EntryProps[] = [
    { title: 'Blog Post 1', content: 'Content for Blog Post 1', img: '' },
  ];

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
    </section>)
  };

  export default About;