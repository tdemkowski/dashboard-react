import react from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";
import { ReactSVG } from "react-svg";

import "./Styles/dashboard.scss";
import { Pie, Bar } from "react-chartjs-2";

import DoughnutExample from './ChartExamples/DoughnutExample'
import BubbleExample from './ChartExamples/BubbleExample';

import icon1 from "../../Images/Icons/cloud.svg";
import icon2 from "../../Images/Icons/app.svg";
import icon3 from "../../Images/Icons/worldwide.svg";
import icon4 from "../../Images/Icons/clock-1.svg";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="dashboard-wrapper"
    >
      <div className="top-stats-wrapper">
        <div className="top-stats">
          <div className="stats">
            <ReactSVG src={icon1} id="icon1" />
            <div className="details">
              <p>Capacity</p>
              <h2>105GB</h2>
            </div>
          </div>
          <hr />
          <div className="actions">qweqwe</div>
        </div>
        <div className="top-stats">
          <div className="stats">
            <ReactSVG src={icon2} id="icon2" />
            <div className="details">
              <p>Revenue</p>
              <h2>$1,345</h2>
            </div>
          </div>
          <hr />
          <div className="actions">ASD</div>
        </div>
        <div className="top-stats">
          <div className="stats">
            <ReactSVG src={icon3} id="icon3" />
            <div className="details">
              <p>Errors</p>
              <h2>23</h2>
            </div>
          </div>
          <hr />
          <div className="actions">SDADS</div>
        </div>
        <div className="top-stats">
          <div className="stats">
            <ReactSVG src={icon4} id="icon4" />
            <div className="details">
              <p>Followers</p>
              <h2>+23</h2>
            </div>
          </div>
          <hr />
          <div className="actions">SDASD</div>
        </div>
      </div>
      {/* https://github.com/chartjs/Chart.js/blob/master/samples/scriptable/line.html CHECK THIS OUT */}
      {/* https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/components/app.js and these examples too!*/}
      <div className="charts-wrapper">
        <div className="charts">
          <h3>User Behaviour</h3>
          <p>24 hour performance</p>
          <Pie data={data} height={250} width={500} />
          <hr></hr>
          <p>ICON A note was left here</p>
        </div>
        <div className="charts">
          <h3>User Behaviour</h3>
          <p>24 hour performance</p>
          <Bar data={data} height={250} width={500} />
          <hr></hr>
          <p>ICON A note was left here</p>
        </div>
        <div className="charts">
          <DoughnutExample />
        </div>
        <div className="charts">
          <BubbleExample />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
