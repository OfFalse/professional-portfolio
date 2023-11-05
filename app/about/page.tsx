'use client'

import React from "react";
import { useInView } from 'react-intersection-observer';
import Entry from '../../components/Entry';
import "../../styles/components/Entry.css";
import { EntryProps } from "../../components/Entry";

const About: React.FC = () => {

  const [ref, inView] = useInView(true);

  const blogData: EntryProps[] = [
    { title: 'Blog Post 1', content: 'Content for Blog Post 1', img: '' },
    { title: 'Blog Post 2', content: 'Content for Blog Post 2', img: '' },
  ];

  return (<section>
    <div>About Me</div>
    <div>
      {blogData.map((entry, index) => (
        <div
          key={index}
          ref={ref}
          className={`blog-entry${inView ? 'in-view' : ''}`}
        >
          <Entry title={entry.title} content={entry.content} img={entry.img} />
        </div>
      ))}
    </div>
    </section>)
  };

  export default About;