import React from "react";
import INavbarPresentation from "./INavbarPresentation";
import SignUpPresentation from "./SignUpPresentation/SignUpPresentation";
import SignInPresentation from "./SignInPresentation/SignInPresentation";
import CommonConfig from "../../Config/CommonConfig";
import { motion } from "motion/react";

const NavbarPresentation: React.FC<INavbarPresentation> = ({
  isUserLoggedIn,
}) => {
  const textVariant = {
    hidden: { opacity: 0, x: -10 }, // Start slightly to the left and invisible
    visible: (i: number) => ({
      opacity: 1,
      x: 0, // Move to the center
      transition: {
        delay: i * 0.05, // Add a delay for each letter
        duration: 0.4, // Duration of animation per letter
      },
    }),
  };

  return (
    <div className="flex w-full justify-between">
      <div className="p-1 flex flex-col justify-center items-start ">
        <h1 className="text-md font-bold text-[#582f0e] flex space-x-1">
          {CommonConfig.prj_title.split("").map((char, index) => (
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
          ))}
        </h1>
        <h2 className="m-0 text-xs text-[#adb5bd] fomt-medium">
          {`~ ${CommonConfig.prj_subDescription}`
            .split("")
            .map((char, index) => (
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
            ))}
        </h2>
      </div>
      <div className="flex w-full justify-end h-12">
        {isUserLoggedIn && <SignInPresentation />}
        {!isUserLoggedIn && <SignUpPresentation />}
      </div>
    </div>
  );
};

export default NavbarPresentation;
