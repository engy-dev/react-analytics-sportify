import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="text-[8px] font-[500] bg-white text-black w-[39px]
      h-[25px] flex flex-col items-center justify-around "
      >
        <p>{payload[0].value} min</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
