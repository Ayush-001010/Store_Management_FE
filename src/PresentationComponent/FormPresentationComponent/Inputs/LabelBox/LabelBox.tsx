import React, { useEffect, useState } from "react";
import ILabelBox from "./ILabelBox";
import { useGetFormContext } from "../../../../UIComponent/Form/FormUI";
import { motion } from "framer-motion";

const LabelBox: React.FC<ILabelBox> = ({ text, isSmall }) => {
  const { isAnimationRequired } = useGetFormContext();
  const [shouldAnimate, setShouldAnimate] = useState(false); // Tracks if animation should happen

  useEffect(() => {
    // Trigger animation once when the component is first mounted
    if (isAnimationRequired) {
      setShouldAnimate(true);

      // After setting animation to true (and running it), prevent further animations
      setTimeout(() => {
        setShouldAnimate(false);
      }, text.length * 50 + 400); // Animation duration logic correlated with your delay/duration
    }
  }, [isAnimationRequired, text.length]); // Run only on mount or when animation requirement/text changes

  const textVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <label
      className={
        "font-medium text-[#495057] cursor-default hover:text-[#212529] select-none " +
        (isSmall ? "text-sm" : "text-base")
      }
    >
      {shouldAnimate ? (
        text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      ) : (
        // Simply display the static text (no animation)
        text
      )}
    </label>
  );
};

export default LabelBox;