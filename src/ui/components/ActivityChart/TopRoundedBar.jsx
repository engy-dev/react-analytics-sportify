import React from "react";

const TopRoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 5;
  return (
    <path
      fill={fill}
      d={`M${x},${y + radius} 
            L${x},${y + height} 
            L${x + width},${y + height} 
            L${x + width},${y + radius} 
            Q${x + width},${y} ${x + width - radius},${y} 
            L${x + radius},${y} 
            Q${x},${y} ${x},${y + radius} Z`}
    />
  );
};

export default TopRoundedBar;
