import { useState } from "react";
import { motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

import Notification from "./Utils/Notification";
import Stream from './Utils/Stream'

import star from "../../Images/Icons/star.svg";
import stopwatch from "../../Images/Icons/stopwatch.svg";
import "./Styles/notifications.scss";

const leftSampleArray = [
  <p>This is a plain notification</p>,
  <p>This notification has a closed button</p>,
  <div className="notification-item-inner">
    <img
      src={star}
      alt="star icon"
      style={{ width: "1.8rem", marginRight: "8px" }}
    />
    <p>And this one also has an icon</p>
  </div>,
  <div className="notification-item-inner">
    <img
      src={stopwatch}
      alt="stopwatch icon"
      style={{ width: "1.8rem", marginRight: "8px" }}
    />
    <p>
      Here is how it looks as the content amount increases. By default the
      notifications will vanish after 3 seconds. You can use mode="static" to
      prevent this. Also, click on the notifications.
    </p>
  </div>,
];

const rightSampleArray = [
  [<p>Primary - This text is a placeholder</p>, "primary"],
  [<p>Success - This text is a placeholder</p>, "success"],
  [<p>Info - This text is a placeholder</p>, "info"],
  [<p>Warning - This text is a placeholder</p>, "warning"],
  [<p>Danger - This text is a placeholder</p>, "danger"],
];

const Notifications = () => {
  const [leftNotifications, setLN] = useState(leftSampleArray);
  const [rightNotifications, setRN] = useState(rightSampleArray);
  const [lastClicked, setLastClicked] = useState([-1, ""]);
  const [streamCount, setStreamCount] = useState(0)

  const removeNotification = (index, string) => {
    setTimeout(() => {
      if (string === "left") {
        setLN(leftNotifications.filter((e, i) => i !== index));
        setLastClicked([index, "left"]);
      } else {
        setRN(rightNotifications.filter((e, i) => i !== index));
        setLastClicked([index, "right"]);
      }
    }, 200);
  };

  return (
    <motion.div
      style={{ position: "absolute" }}
      className="notifications-wrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="notifications-window">
        <h2>Notification showcase</h2>
        <p className="muted-text">
          Made by yours truly. Blabla insert latin nonsense here, somnia caela
          habent.
        </p>
        <div className="notifications">
          <div className="notifications-left">
            <p>Different styles</p>
            {leftNotifications.map((container, index) => (
              <Notification
                key={index + Math.random()}
                container={container}
                index={index}
                removeNotification={removeNotification}
                side={"left"}
                lastClicked={lastClicked}
              />
            ))}
          </div>
          <div className="notifications-right">
            <p>They come in different colors</p>
            {rightNotifications.map((container, index) => (
              <Notification
                key={index + Math.random()}
                container={container[0]}
                color={container[1]}
                index={index}
                removeNotification={removeNotification}
                side={"right"}
                lastClicked={lastClicked}
              />
            ))}
          </div>
        </div>

        <Stream />
      </div>
    </motion.div>
  );
};

export default Notifications;
