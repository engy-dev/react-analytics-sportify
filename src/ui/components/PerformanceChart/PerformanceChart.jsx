// src/PerformanceChart.js
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomTick from "./CustomTick";
import useFetchPerformance from "../../../application/hooks/useFetchPerformance";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Loading from "../Loading/Loading";

const PerformanceChart = () => {
  let { data, error, loading } = useFetchPerformance(12);
  let kind = data?.data?.kind;
  data = data?.data?.data;

  if (error) {
    return <ErrorMsg />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ResponsiveContainer width={258} height={263} className="">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid gridType={"polygon"} />
        <PolarAngleAxis dataKey="kind" tick={<CustomTick kind={kind} />} />
        {/*<PolarRadiusAxis />*/}
        <Tooltip content={<CustomTooltip />} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
