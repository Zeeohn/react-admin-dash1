import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard param={props} set />}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div className="CompactCard">
      <div className="radialBar">Chart</div>
      <div className="detail">
        <Png />
        <span>#</span>
      </div>
    </div>
  );
}

export default Card;
