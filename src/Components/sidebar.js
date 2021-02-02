import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import Section from "./section";

const sections = [
  "DASHBOARD",
  "USER PROFILE",
  "TYPOGRAPHY",
  "MAPS",
  "TABLE LIST",
  "ICONS",
  "NOTIFICATIONS",
];

const sectionsHash = {
  dashboard: "DASHBOARD",
  userProfile: "USER PROFILE",
  typography: "TYPOGRAPHY",
  maps: "MAPS",
  tableList: "TABLE LIST",
  icons: "ICONS",
  notifications: "NOTIFICATIONS",
};

const sectionsInverse = {
  DASHBOARD: "dashboard",
  "USER PROFILE": "userProfile",
  TYPOGRAPHY: "typography",
  MAPS: "maps",
  "TABLE LIST": "tableList",
  ICONS: "icons",
  NOTIFICATIONS: "notifications",
};

const Sidebar = props => {
  let location = useLocation().pathname.substring(1) || "dashboard";
  const [active, setActive] = useState(sectionsHash[location]);

  return (
    <div
      className="sidebar"
      style={{
        backgroundImage: "url(" + props.image + ")",
        backgroundColor: props.color,
        transitionDuration: "0.2s",
      }}
    >
      <div className="sidebar-pseudo-container"></div>
      <div className="title white">
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>React Template</p>
      </div>
      <hr style={{marginTop: '1.2rem'}}/>
      {sections.map(name => {
        return (
        <Link
          style={{ textDecoration: "none" }}
          to={name === "DASHBOARD" ? "/" : "/" + sectionsInverse[name]}
          key={name + "-parent"}
        >
          <animated.div
            className={
              (active === name ? "sectionActive" : "section") +
              " " +
              (active === name ? "active" : null)
            }
            onClick={() => setActive(name)}
            style={{marginBottom: '0.5rem'}}
          >
            <Section
              key={name}
              name={name}
              active={active === name ? "active" : null}
            />
          </animated.div>
        </Link>
      )
      })}
    </div>
  );
};

export default Sidebar;
