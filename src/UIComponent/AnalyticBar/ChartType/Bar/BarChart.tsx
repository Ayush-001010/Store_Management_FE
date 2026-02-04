import React from "react";
import IBarChart from "./IBarChart";
import { useGetAnalyticBarContext } from "../../AnalyticBar";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const BarChartUI: React.FC<IBarChart> = () => {
    const { analyticData } = useGetAnalyticBarContext();
    return (
        <div>
             <BarChart accessibilityLayer barCategoryGap="10%" barGap={4} data={analyticData} width={730} height={250}>
                <XAxis dataKey={"xAxisName"} />
                <YAxis />
                <Bar activeBar={{ fill: 'gold' }} dataKey="value" fill="#8884d8" stackId="a" />
            </BarChart>
        </div>
    )
};

export default BarChartUI;