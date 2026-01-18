import React from "react";
import IVerticalStepFlowBar from "./IVerticalStepFlowBar";
import StepFlowInterface from "../../../Types/StepFlowInterface";
import StepFlowBar from "../../../PresentationComponent/StepFlowBar/StepFlowBar";
import { motion } from "framer-motion";

const VerticalStepFlowBar: React.FC<IVerticalStepFlowBar> = ({
  flowBarConfig,
}) => {
  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Each child will appear with a delay of 0.3s
          },
        },
      }}
    >
      {flowBarConfig.map((step: StepFlowInterface, index: number) => (
        <motion.div
          key={index}
          className="my-1"
          variants={{
            hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
            visible: { opacity: 1, y: 0 }, // Fade and move up
          }}
          transition={{ duration: 0.5 }} // Customize the speed of each animation
        >
          <StepFlowBar
            key={index}
            isLast={index === flowBarConfig.length - 1}
            index={index}
            config={step}
            activeStepIndex={0}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VerticalStepFlowBar;
