
// src/BarChartComponent.js
import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Custom component for rounded columns
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

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="text-xs font-[500] bg-red-700 text-xs text-white w-16 h-20 flex flex-col items-center justify-around ">
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

const BarChartComponent = ({ data }) => (
    <ResponsiveContainer width="100%" height={170}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="day" tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="kilogram" fill="#282D30" shape={<TopRoundedBar />} barSize={9} />
            <Bar dataKey="calories" fill="#E60000" shape={<TopRoundedBar />} barSize={9} />
            <YAxis orientation={"right"} tickLine={false} axisLine={false} />
        </BarChart>
    </ResponsiveContainer>
);

export default BarChartComponent;