import React from 'react';
import {TPMedia} from '@/datasets/TPMedia';
import "../styles/components/SidePanel.css"


const SidePanel: React.FC = () => {
  return (
    <div className="side-panel">
      {TPMedia.map((item, index) => (
        <div className="side-panel-item" key={index}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.label} />
          <div className="label">{item.label}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SidePanel;
