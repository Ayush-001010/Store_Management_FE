import React, { useMemo, useState } from "react";
import ISideNavbarPresentation from "./ISideNavbarPresentation";
import { Link } from "react-router-dom";
import TextLinkCard from "../Cards/TextLinkCard/TextLinkCard";
import { motion } from "motion/react";

const SideNavbarPresentation: React.FC<ISideNavbarPresentation> = ({
  config, title , sub_description
}) => {
  const [activeLink, setActiveLink] = useState<string>("/shopsDashboard");

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
  const nonActiveLinkClass = useMemo(
    () =>
      "text-2xl h-20 content-center  text-[#343a40]  hover:text-[#023e8a] bg-none  text-shadow-sm font-normal hover:bg-[#e9ecef] w-full",
    []
  );
  const activeLinkClass = useMemo(
    () =>
      " text-2xl h-20 content-center text-[#023e8a] border-r-2 border-[#023e8a]  hover:text-[#343a40] shadow-sm  text-shadow-sm font-normal hover:bg-[#e9ecef] w-full",
    []
  );
  return (
    <div>
      <div className="p-3 flex flex-col justify-center items-start bg-[#e5e6e4] ">
        <h1 className="text-md font-bold text-[#582f0e] flex space-x-1">
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
        <h2 className="m-0 text-xs text-[#adb5bd] fomt-medium">
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
      <div className="w-full text-center cursor-pointer my-3">
        <Link to={config.link}>
          <p className={ config.link === activeLink ? activeLinkClass : nonActiveLinkClass }>
            {config.iconClass ? (
              <span>
                <i className={"mx-2 font-bold " + config.iconClass} />
              </span>
            ) : (
              ""
            )}
            {config.navTitle}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbarPresentation;
