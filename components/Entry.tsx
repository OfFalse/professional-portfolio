'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export interface ProjectProps {
  title: string;
  description: string;
}

export const ProjectShowcase: React.FC<ProjectProps> = ({ title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px 300px 0px'
  });

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(inView ? 1 : 0);
  }, [inView]);

  return (
    <div ref={ref} style={{ transition: 'opacity 3s', opacity }}>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <img src={imageUrl} alt={title} /> */}
    </div>
  );
};
