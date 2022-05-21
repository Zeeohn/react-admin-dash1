import React from "react";
import "./Sidebar.css";
import Placeholder from "../../imgs/placeholder.png";

import { UilEstate } from "@iconscout/react-unicons";

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
        <div className="menuItem">
          <div>
            <UilEstate />
          </div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
