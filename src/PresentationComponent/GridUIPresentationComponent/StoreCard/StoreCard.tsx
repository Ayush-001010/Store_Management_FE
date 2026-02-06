import React, { useMemo, useState } from "react";
import IStoreCard from "./IStoreCard";
import { Progress, Tooltip } from "antd";
import { useGetDashboardContext } from "../../../UIComponent/Dashboard/Dashboard";

const StoreCard: React.FC<IStoreCard> = ({ config, item }) => {
  let { isFavorite, name, revenu, profit } = item;
  const { formatterHandler } = useGetDashboardContext();
  const [isFavoriteVal, setIsFavoriteVal] = useState(isFavorite);

  const booleanField = useMemo(() => {
    return ["is24hrOpen"];
  }, []);
  return (
    <div className="shadow-lg p-6 w-[550px] rounded-lg bg-[#f8f9fa] border border-[#e9ecef]">
      <div>
        <p
          className="text-lg font-bold text-[#495057]"
          onClick={() => {
            if (formatterHandler) {
              formatterHandler("FavoriteFormatter", item);
            }
            setIsFavoriteVal(!isFavoriteVal);
          }}
          style={{ cursor: "pointer" }}
        >
          {isFavoriteVal ? "★" : "☆"} {name}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 my-1">
        {config?.map((conf, index) => {
          if (index === 0) return null;
          let str = (item[conf.field as keyof typeof item] as string) || "";
          if (booleanField.includes(conf.field)) {
            str = str ? "Yes" : "No";
          }
          return (
            <div key={index}>
              <p className="text-sm text-[#495057] break-all whitespace-normal">
                <i className={`mr-2 text-[#adb5bd] ${conf.icon}`} />
                {conf.headerName}: {str.slice(0, 20)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative mt-4">
        <Tooltip
          title={`Revenue: $${revenu.toLocaleString()} | Profit: $${profit.toLocaleString()}`}
          overlayInnerStyle={{
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#41464b",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            borderRadius: "0.375rem",
            padding: "0.5rem",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Progress
            percent={revenu} // Displays the main revenue progress
            success={{ percent: profit }} // The success zone for profit
            status="active" // Active progress animation
          />
        </Tooltip>
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#ced4da] text-white text-sm font-medium py-2 px-6 rounded-lg transition-all hover:bg-[#adb5bd] hover:shadow-lg hover:text-white">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
