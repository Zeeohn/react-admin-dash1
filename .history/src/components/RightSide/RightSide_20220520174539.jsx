import React from "react";
import "./RightSide.css";
import Updates from "../Updates/Updates.jsx";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customers Review</h3>
      </div>
    </div>
  );
};

export default RightSide;
