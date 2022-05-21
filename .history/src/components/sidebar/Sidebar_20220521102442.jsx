import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import Placeholder from "../../imgs/placeholder.png";

import { SidebarData } from "../../Data/Data.js";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}>
        <UilBars />
      </div>
      <motion.div className="Sidebar">
        {/*logo*/}
        <div className="logo">
          <img src={Placeholder} alt="Admin placeholder" />
          <span>
            Admin<span>istrator</span>
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem signOut">
            <UilSignOutAlt />
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
