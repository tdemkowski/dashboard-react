import React from "react";
import { Bubble } from "react-chartjs-2";

const N = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const data = {
  labels: ["January"],
  datasets: [
    {
      label: "Bubbles without meaning",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 10, y: 20, r: 15 },
        ...N.map(n => {
          return {
            x: randomIntFromInterval(-50, 50),
            y: randomIntFromInterval(-50, 50),
            r: randomIntFromInterval(5, 20),
          };
        }),
      ],
    },
  ],
};

const BubbleExample = () => {
  return (
    <div>
      <h2>Bubble Example</h2>
      <Bubble data={data} />
    </div>
  );
};

export default BubbleExample;
