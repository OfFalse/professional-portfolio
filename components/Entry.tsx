'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface EntryProps {
  title: string;
  content: string;
  img: string;
}

const Entry: React.FC<EntryProps> = ({ title, content, img }) => {
  
  const {ref, inView} = useInView({threshold: 0});

  return (
    <div className="blog-entry">
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={img}/>
    </div>
  );
};

export default Entry;