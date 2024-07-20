// src/ActivityChart.js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// Кастомный компонент для закругленных колонок
import CustomTooltip from "./CustomTooltip";
import TopRoundedBar from "./TopRoundedBar";
import useFetchActivity from "../../../application/hooks/useFetchActivity";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Loading from "../Loading/Loading";

const ActivityChart = () => {
  let { data, error, loading } = useFetchActivity(12);
  data = data?.data?.sessions;
  const formatXAxisTick = (tick) => (tick + 1).toString();

  if (error) {
    return <ErrorMsg />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
        <YAxis dataKey="calories" yAxisId="left" hide />
        <YAxis
          dataKey="kilogram"
          yAxisId="right"
          orientation="right"
          domain={["dataMin - 1", "dataMax + 1"]}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
          tickMargin={30}
        />
        <XAxis
          tickLine={false}
          stroke="#9B9EAC"
          tickMargin={15}
          tickFormatter={formatXAxisTick}
        />
        <CartesianGrid
          strokeDasharray="3 2"
          vertical={false}
          stroke="#c4c4c4"
          opacity={0.5}
        />
        <Tooltip content={<CustomTooltip />} offset={33} />

        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282d30"
          name="Poids (kg)"
          barSize={8}
          shape={<TopRoundedBar />}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#e60000"
          name="Calories brûlées (kCal)"
          barSize={8}
          shape={<TopRoundedBar />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
