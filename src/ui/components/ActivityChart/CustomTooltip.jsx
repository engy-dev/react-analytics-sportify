import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-xs font-[500] bg-[#E60000] text-white w-16 h-20 flex flex-col items-center justify-around ">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
