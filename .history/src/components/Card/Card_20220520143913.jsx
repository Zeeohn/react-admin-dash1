import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard />}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param }) {
  return (
    <div className="CompactCard">
      <div className="radialBar">Chart</div>
      <div className="detail"></div>
    </div>
  );
}

export default Card;
