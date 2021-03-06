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

export default Card;
