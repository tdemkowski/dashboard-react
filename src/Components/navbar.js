import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import searchIcon from "../Images/Icons/search-1.svg";
import menu from "../Images/Icons/menu.svg";

const darkGreen = "#2ebd6c";

const dropdownItems = [
  "An action",
  "A link",
  "Somewhere",
  "Something",
  "Placeholder",
];

const Navbar = props => {
  const [dropdownActive, setDA] = useState(false);

  const expandedProps = useSpring({
    height: dropdownActive ? "205px" : "0px",
    opacity: dropdownActive ? 1 : 0,
    config: { duration: 300 },
  });
  const arrowProps = useSpring({
    position: "relative",
    top: dropdownActive ? "0px" : "2px",
    transform: `rotate(${dropdownActive ? "0" : "90"}deg)`,
    config: { duration: 300 }
  });

  const highlightStyle = { color: dropdownActive ? darkGreen : null };

  const dropdown = () => {
    return (
      <animated.div style={expandedProps} className="dropdown-expanded">
        {dropdownItems.map(item => (
          <div className="dropdown-item" key={item}>
            {item}
          </div>
        ))}
      </animated.div>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <input type="text" className="searchbar"></input>
        <img className="searchbar-icon" src={searchIcon}></img>
      </div>
      <div className="navbar-right">
        <div className="account" onClick={() => setDA(false)}>
          <p>Account</p>
        </div>
        <div className="dropdown" onClick={() => setDA(!dropdownActive)}>
          <p style={highlightStyle}>Dropdown</p>
          <animated.div
            className="dropdown-arrow"
            style={{ ...highlightStyle, ...arrowProps }}
          >
            ⯆
          </animated.div>
          {dropdown()}
        </div>
        <div className="logOut" onClick={() => setDA(false)}>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
