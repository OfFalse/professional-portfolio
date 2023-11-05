'use client'
import React from 'react';

export interface EntryProps {
  title: string;
  content: string;
  img: string;
}

const Entry: React.FC<EntryProps> = ({ title, content, img }) => {
  return (
    <div className="blog-entry">
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={img}/>
    </div>
  );
};

export default Entry;