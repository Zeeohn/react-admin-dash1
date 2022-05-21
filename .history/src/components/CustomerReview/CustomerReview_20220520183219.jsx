import React from "react";
import "./CustomerReview.css";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
    },
  };
  return (
    <div className="CustomerReview">
      <Chart />
    </div>
  );
};

export default CustomerReview;
