import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomCursor from "./CustomCursor";
import useFetchSession from "../../../application/hooks/useFetchSession";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Loading from "../Loading/Loading";
import CustomTick from "./CustomTick";

export default function AverageSessionChart() {
  let { data, error, loading } = useFetchSession(12);
  data = data?.data?.sessions;
  if (error) {
    return <ErrorMsg />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ComposedChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 35,
          right: 0,
          bottom: 5,
          left: 5,
        }}
      >
        <CartesianGrid stroke="FF0000" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="day"
          tick={<CustomTick />}
          tickMargin={15}
        />
        <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="sessionLength"
          fill="#ff1010"
          stroke="#ff1010"
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#ffffff"
          dot={false}
          strokeWidth={2}
        />
      </ComposedChart>
      <span
        className={
          "absolute left-3 top-3 z-10 text-white/50 text-[15px] font-[500] text-start"
        }
      >
        Durée moyenne des <br /> sessions
      </span>
    </>
  );
}
