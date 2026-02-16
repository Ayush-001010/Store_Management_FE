import React, { useEffect, useState } from "react";
import IGridUI from "./IGridUI";
import { useGetDashboardContext } from "../Dashboard";
import StoreCard from "../../../PresentationComponent/GridUIPresentationComponent/StoreCard/StoreCard";
import { Popover } from "antd";
import Filter from "./Filter/Filter";

const GridUI: React.FC<IGridUI> = () => {
  const { gridType, gridConfig, data, gridFilterConfig } =
    useGetDashboardContext();
  const [displayData, setDisplayData] = useState<Array<any>>([]);

  const filterHandler = (type: "apply" | "clear",filterValue: Record<string, any>) => {
    if (type === "apply") {
      const config = gridFilterConfig;
      const originalData = data;
      const newDisplayData: Array<any> = [];
      originalData.forEach((item) => {
        let isVisible = true;
        config?.forEach((filter) => {
          switch (filter.type) {
            case "text": {
              const filterCondition = filterValue
                ? filterValue[filter.field]
                : "no_filter";
              if (filterCondition === "no_filter") return;
              switch (filterCondition) {
                case "equal": {
                  if (
                    item[filter.field] !== filterValue[filter.field + "_Val"]
                  ) {
                    // Exclude this item from displayData
                    isVisible = false;
                  }
                  break;
                }
                case "contain": {
                  if (
                    !item[filter.field].includes(
                      filterValue[filter.field + "_Val"]
                    )
                  ) {
                    // Exclude this item from displayData
                    isVisible = false;
                  }
                  break;
                }
                case "not_equal": {
                  if (
                    item[filter.field] === filterValue[filter.field + "_Val"]
                  ) {
                    // Exclude this item from displayData
                    isVisible = false;
                  }
                  break;
                }
              }
              break;
            }
            case "boolean": {
              const filterCondition = filterValue
                ? filterValue[filter.field]
                : "no_filter";
              if (filterCondition === "no_filter") return;
              if (String(item[filter.field]) !== filterCondition) {
                // Exclude this item from displayData
                isVisible = false;
              }
              break;
            }
            case "time": {
              const filterCondition = filterValue
                ? filterValue[filter.field]
                : "";
              if (!filterCondition) return;
              if (item[filter.field] !== filterCondition) {
                // Exclude this item from displayData
                isVisible = false;
              }
              break;
            }
          }
        });
        if (isVisible) {
          newDisplayData.push(item);
        }
      });
      setDisplayData(newDisplayData);
    } else {
      setDisplayData(data);
    }
  };
  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  return (
    <div>
      <div className="flex justify-end">
        <Popover
          trigger="click"
          content={<Filter filterHandler={filterHandler} />}
          overlayInnerStyle={{ padding: 0 }}
          placement="bottomRight"
        >
          <p className="bg-[#ced4da] w-10 h-10 m-0 flex justify-center shadow-lg cursor-pointer hover:bg-[#6c757d] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 p-2 rounded-full text-white">
            <i className="bi bi-funnel-fill" />
          </p>
        </Popover>
      </div>
      <div className="flex gap-2 flex-wrap">
        {displayData &&
          displayData.map((item, index) => {
            switch (gridType) {
              case "store":
                return (
                  <StoreCard
                    key={index}
                    item={item}
                    config={gridConfig || []}
                  />
                );
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
};

export default GridUI;
