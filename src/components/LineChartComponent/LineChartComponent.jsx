// src/LineChartComponent.js
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="text-xs font-[500] bg-red-700 text-xs text-white w-14 h-14 flex flex-col items-center justify-around ">
                <p>{payload[0].value} min</p>
            </div>
        );
    }
    return null;
};

const LineChartComponent = ({data}) => {
    return (
        <ResponsiveContainer className={'bg-[#FF0000]'} width="100%" height={128}>
            <LineChart
                data={data}
                margin={{
                    top: 0, right: 10, left: 10, bottom: 0,
                }}
            >
                <XAxis
                       axisLine={false}
                       tickLine={false}
                       dataKey="day"
                       tick={{ fill: '#ffffff' }} // Изменение цвета текста меток
                />
                <Tooltip content={<CustomTooltip/>} />
                <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;
