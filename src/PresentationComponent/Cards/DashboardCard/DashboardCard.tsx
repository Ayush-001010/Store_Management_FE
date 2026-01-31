import React from "react";
import IDashboardCard from "./IDashboardCard";
import { Tooltip } from "antd";

const DashboardCard: React.FC<IDashboardCard> = ({ config }) => {
  return (
    <div className="w-80 h-36 shadow-lg bg-[#e9ecef] rounded-xl mx-4 p-4 transform transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-50 flex justify-center items-center rounded-full shadow-inner">
          <i
            className={`${config.iconClassName || ""} text-gray-600 text-xl`}
          ></i>
        </div>
        <Tooltip title={config.tooltipText || ""}>
          <p className="text-lg font-semibold text-gray-800 truncate">
            {config.title}
          </p>
        </Tooltip>
      </div>
      <div className="flex justify-center items-center h-full">
        <p className="text-xl font-bold text-gray-900">{config.value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
