const CustomTick = ({ payload, x, y, textAnchor }) => {
  const customLabels = ["L", "M", "M", "J", "V", "S", "D"];

  // Ensure that the index is within the bounds of the customLabels array
  const index = payload.index % customLabels.length;
  const label = customLabels[index];
  return (
    <g className="">
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        className=""
        fill="#ffffff" // Use fill instead of stroke for text color
        fontSize={12}
        fontWeight={500}
      >
        {label}
      </text>
    </g>
  );
};

export default CustomTick;
