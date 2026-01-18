import React from "react";
import IHeaderText from "./IHeaderText";
import { useGetFormContext } from "../../../UIComponent/Form/FormUI";
import { motion } from "motion/react";

const HeaderText: React.FC<IHeaderText> = () => {
  const { headerText: headerProperties } = useGetFormContext();

  const textVariant = {
    hidden: { opacity: 0, x: -10 }, // Start slightly to the left and invisible
    visible: (i: number) => ({
      opacity: 1,
      x: 0, // Move to the center
      transition: {
        delay: i * 0.02, // Add a delay for each letter
        duration: 0.4, // Duration of animation per letter
      },
    }),
  };

  console.log("Header Properties:", headerProperties);
  return (
    <div>
      {!headerProperties?.isAnimationRequired && (
        <h1>{headerProperties?.text}</h1>
      )}
      {headerProperties?.isAnimationRequired && (
        <h1 className="emoji-header">
          {headerProperties.text.split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${char}-${wordIndex}-${charIndex}`}
                  className={`inline-block ${
                    headerProperties.boldWords?.includes(word)
                      ? "text-2xl" 
                      : "text-base"
                  }`}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  custom={wordIndex + charIndex}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                key={`space-${wordIndex}`}
                className="inline-block"
                variants={textVariant}
                initial="hidden"
                animate="visible"
                custom={wordIndex}
              >
                &nbsp;
              </motion.span>
            </React.Fragment>
          ))}
        </h1>
      )}
    </div>
  );
};

export default HeaderText;