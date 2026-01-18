import React from "react";
import INavbarPresentation from "./INavbarPresentation";
import TextLinkCard from "../Cards/TextLinkCard/TextLinkCard";
import { motion } from "motion/react";

const NavbarPresentation: React.FC<INavbarPresentation> = ({
  title,
  sub_description,
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
    <div className="flex justify-start h-12 ">
      <div className="w-1/2 flex flex-col justify-center items-start p-4">
        <h1 className="text-xl font-bold text-[#582f0e] flex space-x-1">
          {title.split("").map((char, index) => (
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
        <h2 className="m-0 text-sm text-[#adb5bd] fomt-medium">
          {`~ ${sub_description}`.split("").map((char, index) => (
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
      {!isUserLoggedIn && (
        <div className="flex w-1/2 justify-end items-center">
          <TextLinkCard navLink="/signIn">Sign In</TextLinkCard>
          <p className="m-1 text-[#adb5bd]">or</p>
          <TextLinkCard navLink="/signUp">Sign Up</TextLinkCard>
        </div>
      )}
    </div>
  );
};

export default NavbarPresentation;
