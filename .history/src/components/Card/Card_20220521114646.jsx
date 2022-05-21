import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <CompactCard param={props} />
      ) : (
        // <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        <CompactCard param={props} />
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>₦{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

// Expanded Card
// function ExpandedCard({ param, setExpanded }) {
//   return (
//     <div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     ></div>
//   );
// }

export default Card;
