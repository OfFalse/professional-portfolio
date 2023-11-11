import React from 'react';
import '../styles/components/Gauge.css'

interface GaugeProps {
  value: number;
  title: string;
  color: string;
}
/* Responsive guages relfecting values between 0 - 100 */
const Gauge: React.FC<GaugeProps> = ({ value, title, color }) => {
  const gaugeColor = color === "primary" ? '#00bfff' : '#E5D4FF';
  const labelColor = color === "primary" ? '#0087e0' : '#D0A2F7';

  
  return (
    <div className='gauge'>
      <svg viewBox="0 0 100 4">
        <rect x="0" y="1" width="100" height="4" fill="#ddd" />
        <rect x="15" y="1" width={value * .85} height="4" fill={gaugeColor} />
        <text x="97.5" y="3.25" className='percentage'>
          {value + '%'}
        </text>
        <rect x="0" y="1" width="15" height="4" fill={labelColor} />
        <text x="1" y="3.25" className='skill-label'>
          {title}
        </text>
      </svg>
    </div>
  );
};

interface GaugeData {
  value: number;
  title: string;
}

interface GaugeListProps {
  data: GaugeData[];
  color: string;
}

const GaugeList: React.FC<GaugeListProps> = ({ data, color }) => {
  return (
    <div className='gauge-col'>
      {data.map((gaugeData, index) => (
        <Gauge key={index} {...gaugeData} color={color}/>
      ))}
    </div>
  );
};

export default GaugeList;
