"use client";


import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export interface ProjectProps
{
  title: string;
  description: string;
}

export const ProjectShowcase: React.FC<ProjectProps> = ({ title, description }) =>
{
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px 300px 0px"
  });

  const [opacity, setOpacity] = useState(0);

  useEffect(() =>
  {
    setOpacity(inView ? 1 : 0);
  }, [inView]);

  return (
    <div ref={ref} style={{ transition: "opacity 0.3s ease-in-out", opacity, marginBottom: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
