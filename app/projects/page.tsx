import React from "react";

import "../../styles/components/Entry.css";
// import Entry from '../../components/Entry';

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
    {/* <div className="background">
    
      {blogData.map((entry, index) => (
        <div
          key={index}
          ref={ref}
          className={`blog-entry${inView ? 'in-view' : ''}`}
        >
          {`Header inside viewport ${inView}.`}
          <Entry title={entry.title} content={entry.content} img={entry.img} />
        </div>
      ))}
    </div> */}
  </section>);
}
