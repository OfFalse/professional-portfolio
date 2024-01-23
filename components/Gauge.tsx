import React from "react";
import "../styles/components/Gauge.css";

interface GaugeProps
{
  value: number;
  title: string;
  color: string;
}
/* Responsive guages relfecting values between 0 - 100 */
const Gauge: React.FC<GaugeProps> = ({ value, title, color }) =>
{

  const primary = {
    gaugeColor: "#00bfff",
    labelColor: "#0087e0",
    labelXPos: "11",
    labelRectXPos: "0",
    percXPos: "96.5",
    gaugeXPos: "0"
  };
  const secondary = {
    gaugeColor: "#B15EFF",
    labelColor: "#7743DB",
    labelXPos: "89",
    labelRectXPos: "78",
    percXPos: "3.5",
    gaugeXPos: 100 - value,
  };

  const inst = color === "primary" ? primary : secondary;
  return (
    <div className='gauge'>
      <svg viewBox="0 0 100 6">
        <rect x="0" y="1" width="100" height="6" fill="#ddd" />
        <rect id="gaugeMeasure" x={inst.gaugeXPos} y="1" width={value} height="6" fill={inst.gaugeColor} />
        <text id="gaugeText" x={inst.percXPos} y="70%" className='percentage' dominantBaseline='centre' textAnchor='middle'>
          {value + "%"}
        </text>
        <rect id="gaugeTitle" x={inst.labelRectXPos} y="1" width="22" height="6" fill={inst.labelColor} />
        <text id="gaugeText" x={inst.labelXPos} y="70%" className='skill-label' dominantBaseline='centre' textAnchor='middle'>
          {title}
        </text>
      </svg>
    </div>
  );
};

interface GaugeData
{
  value: number;
  title: string;
}

interface GaugeListProps
{
  data: GaugeData[];
  color: string;
}

const GaugeList: React.FC<GaugeListProps> = ({ data, color }) =>
{
  return (
    <div className='gauge-col'>
      {data.map((gaugeData, index) => (
        <Gauge key={index} {...gaugeData} color={color} />
      ))}
    </div>
  );
};

export default GaugeList;
