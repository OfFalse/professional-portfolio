import React from 'react';

interface GaugeProps {
  value: number;
  title: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, title }) => {
  const color = '#00bfff'

  return (
    <div>
      <h2>{title}</h2>
      <svg viewBox="0 0 100 4">
        <rect x="0" y="1" width="90" rx="1" ry="15" height="2" fill="#ddd" />
        <rect x="0" y="1" width={value /90 * 100} rx="1" ry="15" height="2" fill={color} />
        <circle cx="95" cy="2" r="2" /> 
        <text x="95" y="1.5" textAnchor="middle" fontSize=".01rem">
          {value}
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
}

const GaugeList: React.FC<GaugeListProps> = ({ data }) => {
  return (
    <div>
      {data.map((gaugeData, index) => (
        <Gauge key={index} {...gaugeData} />
      ))}
    </div>
  );
};

export default GaugeList;
