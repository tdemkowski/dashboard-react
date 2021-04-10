import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Alert from "./Alert";

const Stream = props => {
  const MAX_ALERTS = 30
  const STREAM_LIFETIME = 2500
  const [alertCount, setAlertCount] = useState(0);
  const [alertArray, setAlertArray] = useState([]);

  const streamWrapperProps = {
    height: `${alertCount * 3.5}rem`,
  }
  
  const streamWrapperPropsBottom = useSpring({
    top: `calc(${-(alertArray.length*3.5)}rem + 93.5vh)`
  })

  useEffect(() => {
    if (alertArray.length === 0) {
      setAlertCount(0);
    }
  }, [alertArray]);

  const createAlert = () => {
    return alertArray.map(x => x);
  };

  return (
    <div className="notification-stream">
      <div
        className="stream-button"
        onClick={() => {
          if (alertCount < MAX_ALERTS) {
            alertArray.unshift(
              <Alert key={alertCount} alertCount={alertCount} lifetime={STREAM_LIFETIME} />
            );
            setAlertCount(alertCount + 1);
          }
        }}
      >
        <p>Click here to see a notification stream</p>
      </div>
      <animated.div className="notification-stream-wrapper" style={{...streamWrapperProps, ...streamWrapperPropsBottom}}>
        {createAlert()}
      </animated.div>
    </div>
  );
};

export default Stream;
