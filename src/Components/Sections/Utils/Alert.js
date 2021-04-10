import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import close from "../../../Images/close.svg";

const Alert = props => {
  const LIFETIME = props.lifetime;
  const [triggerTime, setTriggerTime] = useState(false);
  const [alive, setAlive] = useState(true);
  const [clicked, setClicked] = useState(false);
  const timeProps = useSpring({
    width: triggerTime ? `${100}%` : `${0}%`,
    config: {
      duration: LIFETIME,
    },
  });
  const streamProps = useSpring({
    opacity: alive ? (clicked ? 0.2 : 1) : 0,
    transform: alive ? "scale(1, 1)" : "scale(1.05, 1)",
    bottom: 0,
    config: {
      duration: 150,
    },
  });

  useEffect(() => {
    setTriggerTime(true);
    // setAlive(true);
    setTimeout(() => {
      setAlive(false);
    }, LIFETIME);
  }, [props.alertCount]);

  return (
    <animated.div className="stream" style={{ ...streamProps }}>
      <img src="" alt="" />
      <div className="stream-content">
        <p>Spamming notifications as if the world is ending.</p>
        <div className="close-button" onClick={() => setClicked(true)}>
          <img src={close} alt="close icon" />
        </div>
      </div>
      <animated.div className="stream-time" style={timeProps}></animated.div>
    </animated.div>
  );
};

export default Alert;
