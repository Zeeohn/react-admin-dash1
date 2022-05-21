import React from "react";
import "./Sidebar.css";
import Placeholder from "../../imgs/placeholder.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={Placeholder} alt="Admin placeholder" />
        <span></span>
      </div>
    </div>
  );
};

export default Sidebar;
