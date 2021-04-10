import react from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";
import { ReactSVG } from "react-svg";

import "./Styles/dashboard.scss";
import { Pie, Bar } from "react-chartjs-2";

import DoughnutExample from "./Utils/DoughnutExample";
import BubbleExample from "./Utils/BubbleExample";

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

  const generateTopStat = (icon, iconId, str1, str2, str3) => {
    return (
      <div className="top-stats">
        <div className="stats">
          <ReactSVG src={icon1} id={iconId} />
          <div className="details">
            <p>{str1}</p>
            <h2>{str2}</h2>
          </div>
        </div>
        <hr />
        <div className="actions muted-text">
          <img className="actions-icon" src={icon1} alt="actions icon"/>
          <p>{str3}</p>
        </div>
      </div>
    );
  };

  const generateChart = (component, str1, str2, str3) => {
    return (
      <div className="charts">
        <h3>{str1}</h3>
        <p>{str2}</p>
        {component}
        <hr></hr>
        <div className="actions muted-text">
          <img className="actions-icon" src={icon1} alt="actions icon"/>
          <p>{str3}</p>
        </div>
      </div>
    );
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
        {generateTopStat(icon1, "icon1", "Capacity", "105GB", "Updated now")}
        {generateTopStat(icon2, "icon2", "Revenue", "$1,345", "Updated 2 minutes ago")}
        {generateTopStat(icon3, "icon3", "Errors", "23", "Last day")}
        {generateTopStat(icon4, "icon4", "Followers", "+7", "Updated yesterday")}
      </div>
      <div className="charts-wrapper">
        {generateChart(<Pie data={data} height={250} width={500} />, "User Behaviour", "24 hour performance", "ICON A note was left here")}
        {generateChart(<Bar data={data} height={250} width={500} />, "Information chart", "Performance in the last year", "Updated today")}
        {generateChart(<DoughnutExample />, "Some information", "For these years", "Updated 5 minutes ago")}
        {generateChart(<BubbleExample />, "Even more data", "Last century", "Updated 2 seconds ago")}
      </div>
    </motion.div>
  );
};

export default Dashboard;
