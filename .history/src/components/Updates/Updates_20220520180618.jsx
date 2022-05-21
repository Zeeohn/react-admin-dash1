import React from "react";
import { UpdatesData } from "../../Data/Data";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="not1">
              <div>
                <span>{update.name}</span>
                <span>{update.not1}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
