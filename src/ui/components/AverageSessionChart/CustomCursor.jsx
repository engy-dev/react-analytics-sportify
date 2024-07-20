import React from "react";
import { Rectangle } from "recharts";

const CustomCursor = ({ points, width, height, stroke }) => {
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="#e60000"
      stroke="#e60000"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

export default CustomCursor;
