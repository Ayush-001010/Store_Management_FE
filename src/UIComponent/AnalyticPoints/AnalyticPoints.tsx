import React, { useMemo } from "react";
import IAnalyticPoints from "./IAnalyticPoints";
import AnalyticDataContext from "../../Types/AnalyticPoints";

const AnalyticPoints: React.FC<IAnalyticPoints> = ({data,analyticBarChangeHandler,}) => {
  const text = useMemo(() => "For more info please click me", []);

  const clickHandler = (clickMe: string | null | undefined) => {
    if (analyticBarChangeHandler) analyticBarChangeHandler(clickMe || "");
  };
  return (
    <div className="relative shadow-lg mx-2 my-2 bg-[#f2f2f2] rounded-lg p-2 h-[500px] overflow-hidden">
      <div className="sticky top-0 bg-[#f2f2f2] border-b border-[#595959] z-10">
        <p className="text-lg font-semibold text-[#212529] mx-2">Points:</p>
      </div>
      <div className="relative p-1 h-full bg-[#e9ecef] overflow-y-auto ">
        <ul className="list-disc pl-5">
          {data.map((point: AnalyticDataContext) => (
            <li key={point.insight} className="my-1 text-sm text-[#212529]">
              {point.insight.split(text)}
              <span
                onClick={() => clickHandler(point?.clickMe)}
                className="cursor-pointer font-semibold hover:underline text-[#595959] font-medium"
              >
                {point.insight.includes(text) ? text : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalyticPoints;
