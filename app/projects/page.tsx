import React from "react";

import "../../styles/components/Entry.css";
import {ProjectShowcase, ProjectProps } from "../../components/Entry";

const blogData: ProjectProps[] = [{title: "The Generative AI Lighthouse, Centre of Excellence", description: "Positioned as Senior Technical Consultant, with a focus on propositions for innovative Proof of Concept solutions. The project included designing and building web applications within bespoke AWS Cloud Architectures, delivering foundational software, and enabling the client to modernize technical and customer support capacities for enhanced service excellence. Cutting-edge technologies like GPT-4 are employed to demonstrate Generative AI capabilities in resolving pain points and needs across various domains.",},
{title: "Test", description: "Test",},
{title: "Test", description: "Test",},
{title: "Test", description: "Test",},
{title: "Test", description: "Test",},
{title: "Test", description: "Test",},
{title: "Test", description: "Test",}];

export default function Projects()
{
  return (<section>
    <div className="row">
      <div>TODO:
        <p> - Intersect component with scroll buffer </p>
        <p> - Soft side animation - Render content in </p>
        <p> - Create Content </p>
      </div>
    </div>
    {blogData.map((entry, index) => (
      <div key={index} className="row">
        <ProjectShowcase title={entry.title} description={entry.description} />
      </div>
    ))}
  </section>);
}
