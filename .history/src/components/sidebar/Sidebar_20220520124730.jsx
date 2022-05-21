import React from "react";
import "./Sidebar.css";
import Placeholder from "../../imgs/placeholder.png";

import { SidebarData } from "../../Data/Data.js";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={Placeholder} alt="Admin placeholder" />
        <span>
          Admin<span>istrator</span>
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className="menuItem">
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
