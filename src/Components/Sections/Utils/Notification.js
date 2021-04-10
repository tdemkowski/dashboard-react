import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import close from "../../../Images/close.svg";

const Notification = props => {
  let offset =
    props.lastClicked[0] <= props.index &&
    props.lastClicked[1] === props.side &&
    props.lastClicked[0] >= 0;
  let [top, setTop] = useState((props.top || 0) + 2 + props.index * 3.5 + 3.5);
  const [opacity, setOpacity] = useState(1);
  const opacitySpring = useSpring({
    opacity: opacity,
    transform: opacity ? "scale(1, 1)" : "scale(1.05, 1)",
    config: {
      duration: 150,
    },
  });
  const topSpring = useSpring({
    top: offset ? `${top}rem` : `${top - 3.5}rem`,
  });

  useEffect(() => {
    if (offset) {
      setTop(top - 3.5);
      // setOffset(offset);
    }
  }, [props.index]);

  return (
    <animated.div
      className={"notification-item " + (props.color ? props.color : "info")}
      style={{ ...topSpring, ...opacitySpring }}
      onClick={() => {
        setOpacity(0);
        props.removeNotification(props.index, props.side);
      }}
    >
      {props.container}
      {props.container.props.children ===
      "This is a plain notification" ? null : (
        <div className="close-button">
          <img src={close} alt="close icon" />
        </div>
      )}
    </animated.div>
  );
};

export default React.memo(Notification);
