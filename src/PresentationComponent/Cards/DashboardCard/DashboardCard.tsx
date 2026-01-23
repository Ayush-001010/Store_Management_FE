import React from "react";
import IDashboardCard from "./IDashboardCard";
import { Tooltip } from "antd";

const DashboardCard: React.FC<IDashboardCard> = ({ config }) => {
  return (
    <div className={"w-72 shadow-md mx-2 rounded-lg p-2 h-36 " + config.backGroundColorClassName || ""}>
      <div className="flex  justify-between">
        <div className="flex justify-start w-full">
          <Tooltip title={config.tooltipText || ""}>
            <p className={"text-xl text-shadow-sm " + config.textColorClassName || ""}>{config.title}</p>
          </Tooltip>
        </div>
        <div>
          <p className={" p-2 rounded-lg  shadow-md " + config.iconBackGroundColorClassName || ""}>
            <i className={config.iconClassName || ""}></i>
          </p>
        </div>
      </div>
      <div>
        <p>{config.value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
