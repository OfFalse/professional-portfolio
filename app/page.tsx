'use client'

import React from "react";
import "../styles/pages/Home.css";

export type JobRoleType = {
  value: string
}

const JobRoles: JobRoleType[] = [{
  value: 'FullStack Developer'
}, {
  value: 'Cloud Practitioner'
}, {
  value: 'Digital Futurist'
}, {
  value: 'Tech Aficionado'
}]


export default function Home() {
  return (
    <section>
          {/* <h1>Greetings, tech enthusiast!</h1>
          <br/> */}
        <header>
          <div className="header-col">
        <div className="header-content">
          <h2>Hi, I'm <span>Nic</span></h2>
          <br />
          <div className='roles-container'>
            {JobRoles.map((item, key) => {
              return(
                <div key={key} className="scroll-text" id={`frame-${key + 1}`}>
                <h2 className={`role-${key + 1}`}>{item.value}</h2>
                </div>
              )
            })}
        </div> 
          </div>
          </div>
          <div className="header-col" id="profile-col">
      <div className="profile-picture">
        <img src="/mugshot.jpg" alt="Profile" />
        <span className="cut-circle"></span>
      </div>
          </div>
        </header>
        <br />
      <div className="content">
          <p>You've stumbled upon my digital hub, where I fuse creativity and precision to showcase my work with the cutting edge of technology.</p>
          <br />

          {/* <p>
             a Software Engineer with a passion for staying ahead of the curve. With a background in multi-million-pound projects that have transformed the public sector, I've honed my skills to create innovative solutions. So, whether you're here to explore my work or discuss the latest breakthroughs in technology, grab a virtual coffee and let's dive into the ever-evolving world of innovation.
          </p> */}
      </div>
    </section>
  );
};

