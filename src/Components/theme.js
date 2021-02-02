import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";

import icon from "../Images/Icons/settings-5.svg";

const images = [image1, image2, image3, image4];
const colors = [
  "#0000009d",
  "#807e009b",
  "#ff25259b",
  "#0000ff9b",
  "#0080009b",
  "#0080809b",
];

const Theme = props => {
  const [expand, setExpand] = useState(false);
  const [toggleExpand, setTE] = useState(false);
  const [hover, setHover] = useState(false);

  const gearProps = useSpring({
    width: toggleExpand ? "5rem" : hover ? "5rem" : "3rem",
    opacity: toggleExpand ? "1" : hover ? "1" : "0.7",
    config: { duration: 50 },
  });

  const windowProps = useSpring({
    top: toggleExpand ? "10rem" : "15rem",
    opacity: toggleExpand ? "1" : "0",
    config: { duration: 200 },
  });

  const expansionHandler = () => {
    setTE(!toggleExpand)
    if (expand) {
      setHover(false)
      setTimeout(() => {
        setExpand(false);
      }, 500);
    } else {
      setExpand(true)
    }
  };

  const expanded = () => {
    return (
      <animated.div
        className="theme-expanded"
        style={windowProps}
      >
        <h3>Filters</h3>
        <div className="theme-expanded-filters">
          {colors.map(color => (
            <div
              className={
                "theme-color " + (color === props.color ? "active" : null)
              }
              key={color}
              style={{
                background: color,
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "1rem",
              }}
              onClick={() => props.setColor(color)}
            ></div>
          ))}
        </div>
        <hr />
        <h3>Images</h3>
        <div className="theme-expanded-images">
          {images.map(image => (
            <img
              key={image.toString()}
              src={image}
              alt=""
              className={
                "image-preview " + (image === props.image ? "active" : null)
              }
              onClick={() => props.setImage(image)}
            ></img>
          ))}
        </div>
      </animated.div>
    );
  };

  return (
    <animated.div
      className="theme"
      style={gearProps}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={icon}
        className="icon"
        onClick={() => expansionHandler()}
      ></img>
      {expand ? expanded() : null}
    </animated.div>
  );
};

export default Theme;
