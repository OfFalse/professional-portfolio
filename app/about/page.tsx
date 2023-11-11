'use client'

import React from "react";

import GaugeList from "../../components/Gauge";
import { EntryProps } from "../../components/Entry";

const techSkills = [
  { value: 85, title: 'Javascript' },
  { value: 75, title: 'SQL' },
  { value: 75, title: 'Node.JS' },
  { value: 75, title: 'Node.JS' },
  { value: 50, title: 'CSS' },
];

const softSkills = [
  { value: 85, title: 'Javascript' },
  { value: 75, title: 'SQL' },
  { value: 75, title: 'Node.JS' },
  { value: 75, title: 'Node.JS' },
  { value: 50, title: 'CSS' },
];

/*JavaScript (ExpressJS, VueJS, Jest), PostgreSQL, HTML5/CSS, AWS, Docker, K8, Agile (SCRUM, Kanban), Git, Consulting, Communication, Complex Problem Solving, Presentation, Requirement Elicitation*/

const About: React.FC = () => {

  const blogData: EntryProps[] = [
    { title: 'Blog Post 1', content: 'Content for Blog Post 1', img: '' },
  ];

  return (<section>
    <div>About Me</div>
    <div className="row">
      <div className="col"></div>
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