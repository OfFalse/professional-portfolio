'use client'

import React from "react";
import { useInView } from 'react-intersection-observer';
import Entry from '../../components/Entry';
import "../../styles/components/Entry.css";
import GaugeList from "../../components/Gauge";
import { EntryProps } from "../../components/Entry";

const data = [
  { value: 50, title: 'Gauge 1' },
  { value: 75, title: 'Gauge 2' },
  { value: 25, title: 'Gauge 3' },
];

const About: React.FC = () => {

  const {ref, inView} = useInView({threshold: 0});

  const blogData: EntryProps[] = [
    { title: 'Blog Post 1', content: 'Content for Blog Post 1', img: '' },
  ];

  return (<section>
    <div>About Me</div>
    
    <div className="background">
    <div className="cube">
  <div className="face1">1</div>
  <div className="face2">2</div>
  <div className="face3">3</div>
  <div className="face4">4</div>
  <div className="face5">5</div>
  <div className="face6">6</div>
</div>
      {/* {blogData.map((entry, index) => (
        <div
          key={index}
          ref={ref}
          className={`blog-entry${inView ? 'in-view' : ''}`}
        >
          {`Header inside viewport ${inView}.`}
          <Entry title={entry.title} content={entry.content} img={entry.img} />
        </div>
      ))} */}
    </div>
    <div>
      <GaugeList data={data} />
    </div>
    </section>)
  };

  export default About;