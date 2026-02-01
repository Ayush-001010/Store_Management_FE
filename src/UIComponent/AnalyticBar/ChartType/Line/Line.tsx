import React from "react";
import ILine from "./ILine";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useGetAnalyticBarContext } from "../../AnalyticBar";

const LineChartUI: React.FC<ILine> = () => {
  const { analyticData } = useGetAnalyticBarContext();
  
  return (
    <div>
      <LineChart data={analyticData} width={800} height={400}>
      <CartesianGrid strokeDasharray="5" />
        <XAxis dataKey={"xAxisName"} />
        <YAxis />
        <Tooltip cursor={{ stroke: '#595959', strokeWidth: 1}}/>
        <Line dataKey="xAxisName" stroke="#8884d8" type="monotone" />
        <Line dataKey="value" stroke="#82ca9d" type="monotone" />
      </LineChart>
    </div>
  );
};

export default LineChartUI;
