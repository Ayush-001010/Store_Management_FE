import React from "react";
import ISideNavbarPresentation from "./ISideNavbarPresentation";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

const SideNavbarPresentation: React.FC<ISideNavbarPresentation> = ({
  config, title , sub_description
}) => {

  return (
    <div>
      <div className="w-full text-center cursor-pointer my-2">
        <Link to={config.link}>
        <Tooltip title={config.navTitle} >
          <p className="flex items-center justify-center">
            {config.iconClass ? (
              <span className="text-xl text-[#212529] hover:text-[#0d6efd]">
                <i className={"mx-2 font-bold " + config.iconClass} />
              </span>
            ) : (
              ""
            )}
          </p>
        </Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbarPresentation;
