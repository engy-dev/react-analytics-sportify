// src/TodayScoreChart.js
import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import useFetchUser from "../../../application/hooks/useFetchUser";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

const renderLegend = () => {
  return (
    <p className="absolute top-[20px] left-[15px] text-gray-800 font-roboto text-[15px] font-medium">
      Score
    </p>
  );
};

const TodayScoreChart = () => {
  let { data, error, loading } = useFetchUser(12);
  const todayScore = data?.data?.todayScore;

  const chartData = [{ name: "TodayScore", uv: todayScore * 100, max: 100 }];

  if (error) {
    return <ErrorMsg />;
  }

  return (
    <div className="relative h-[263px] w-[258px] bg-[#FBFBFB] rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="60%"
          outerRadius="90%"
          startAngle={180}
          data={chartData}
          endAngle={-180}
        >
          <RadialBar background dataKey="max" fill="#fff" />
          <RadialBar dataKey="uv" fill="red" cornerRadius={50} />
          <Legend content={renderLegend} verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-[150px] aspect-square flex items-center justify-center">
        <p className="text-center text-gray-600 text-[16px] font-medium w-[80px]">
          <span className="text-[26px] text-gray-800 font-bold">
            {chartData[0].uv}%{" "}
          </span>
          <br />
          <span className="text-gray-800">de votre objectif</span>
        </p>
      </div>
    </div>
  );
};

export default TodayScoreChart;
