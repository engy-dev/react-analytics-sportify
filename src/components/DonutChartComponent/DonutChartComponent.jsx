// src/DonutChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DonutChartComponent = ({ score }) => {
    const data = [
        { name: 'Score', value: score },
        { name: 'Remaining', value: 100 - score }
    ];
    const COLORS = ['#FF0000', '#f8f8f8']; // Color for the filled part and transparent color for the unfilled part

    return (
        <div style={{ width: '100%', height: 190, borderRadius: '10px', overflow: 'hidden' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={85}
                        startAngle={90}
                        endAngle={450}
                        paddingAngle={0}
                        cornerRadius={10}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                        style={{ fontSize: '15px', fontWeight: 'bold' }}
                    >
                        {`${score}%`}
                        <tspan x="50%" dy="1.2em" className={'text-xs font-semibold'}>de votre objectif</tspan>
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DonutChartComponent;
