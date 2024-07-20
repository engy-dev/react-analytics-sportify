import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-xs font-[500] bg-red-700 text-white w-16 h-20 flex flex-col items-center justify-around ">
        <p>{` ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
