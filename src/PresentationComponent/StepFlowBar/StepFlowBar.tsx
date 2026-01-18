import React, { useMemo } from "react";
import IStepFlowBar from "./IStepFlowBar";

const StepFlowBar: React.FC<IStepFlowBar> = ({
  config,
  activeStepIndex,
  index,
  isLast,
}) => {
  const isActive = useMemo(
    () => index === activeStepIndex,
    [index, activeStepIndex]
  );

  return (
    <div
      className={"m-1 flex justify-start " + (isActive ? "h-auto" : "h-200px")}
    >
      <div className="w-20 ">
        <h1 className={" h-20 w-20 flex justify-center items-center rounded-full text-lg text-[#495057] font-normal hover:font-medium hover:text-[#212529]  cursor-pointer " + (isActive ? "border-[#6c757d] hover:border-2 hover:border-[#343a40] border-2 bg-[#6c757d] text-white text-shadow-sm" : "border-[#ced4da] hover:border-2 hover:border-[#212529] border-1")}>
          {index + 1}
        </h1>
        {!isLast && (
          <div className={" flex justify-center items-center"}>
            <p
              className={
                "w-[0.5px] m-2 shadow-sm " +
                (isActive ? "h-[300px] bg-[#6c757d]" : "h-6 bg-[#6c757d]")
              }
            ></p>
          </div>
        )}
      </div>
      <div className="w-sm">
        <h1 className="flex mt-4 p-1 mb-0 text-lg hover:underline items-center text-shadow-sm ml-1 text-[#495057] hover:text-[#212529] font-medium hover:font-semibold cursor-pointer">
          {config.title}
        </h1>
        {isActive && (
          <div className="w-sm mt-1 ml-2">
            <p className="text-sm text-[#6c757d] font-medium m-0 w-25 text-wrap">
              {config.descriptions}
            </p>
            <div className="mt-1">
              <p className="text-sm text-[#6c757d]">Notes:</p>
              <ul className="list-disc pl-5 text-[#adb5bd] hover:text-[#6c757d] cursor-pointer">
                {config.steps.map((step, index) => (
                  <li key={index} className="text-xs  mt-1">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepFlowBar;
