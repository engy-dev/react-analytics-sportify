import React from "react";
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import AverageSessionChart from "../AverageSessionChart/AverageSessionChart";
import ActivityChart from "../ActivityChart/ActivityChart";
import TodayScoreChart from "../TodayScoreChart/TodayScoreChart";

const Charts = () => {
  return (
    <div className={"w-full max-w-[835px] flex flex-col "}>
      {/*ActivityChart Container*/}
      <div
        className={"w-full rounded  bg-[#FBFBFB] flex flex-col px-4 py-5 mt-7 "}
      >
        <div
          className={
            "w-full max-w-[700px] flex items-center justify-between mb-5"
          }
        >
          <span className={"text-[15px] font-[500]"}>Activité quotidienne</span>

          <div className={"flex items-center gap-4"}>
            '
            <div className={"flex items-center gap-2 text-[15px] font-[500]"}>
              <div className={"w-2 h-2 rounded-full bg-[#282D30]"}></div>
              <span>Poids (kg)</span>
            </div>
            <div
              className={"flex items-center gap-2 text-[15px] font-[500] mr-4"}
            >
              <div className={"w-2 h-2 rounded-full bg-[#E60000]"}></div>
              <span>Calories brûlées (kCal)</span>
            </div>
          </div>
        </div>

        {/*ActivityChart (bar chart) */}
        <div className={"w-full"}>
          <ActivityChart />
        </div>
      </div>
      {/* Other charts */}
      <div
        className={
          "w-full h-full flex flex-col lg:flex-row items-center lg:items-start gap-3 mt-10"
        }
      >
        {/*AverageSessionChart (Line Chart)*/}
        <div
          className={
            "relative w-[258px] h-[263px] mx-auto bg-[#FF0000] flex flex-col items-start rounded"
          }
        >
          <span
            className={
              "absolute left-3 top-3 z-10 text-white/50 text-[15px] font-[500] text-start"
            }
          >
            Durée moyenne des <br /> sessions
          </span>

          <AverageSessionChart />
        </div>

        {/*PerformanceChart (Radar Chart) */}
        <div className={"w-auto h-full rounded bg-[#282D30]"}>
          <PerformanceChart />
        </div>

        {/*TodayScoreChart (Donut Chart)*/}
        <TodayScoreChart />
      </div>
    </div>
  );
};

export default Charts;
