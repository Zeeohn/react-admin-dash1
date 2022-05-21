import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import Placeholder from "../../imgs/placeholder.png";
import Orders from "../Orders/Orders.jsx";

import { SidebarData } from "../../Data/Data.js";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const SidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  console.log(window.innerWidth);

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={SidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
                onClick={() => {
                  setSelected(index);
                  if (index === 1) {
                    <Orders />;
                  }
                }}
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
