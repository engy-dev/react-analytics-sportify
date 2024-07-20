import React from "react";

function CustomTick({ kind, payload, x, y, textAnchor }) {
  const customLabels = Object.values(kind);
  const index = payload.index % customLabels.length;
  const label = customLabels[index];

  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        fill="#ffffffcc" // Use fill instead of stroke for text color
        fontSize={12}
        fontWeight={500}
      >
        {label}
      </text>
    </g>
  );
}

export default CustomTick;
