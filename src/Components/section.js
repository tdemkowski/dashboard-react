import React from "react";

import logo1 from '../Images/Icons/home.svg'
import logo2 from '../Images/Icons/user.svg'
import logo3 from '../Images/Icons/document.svg'
import logo4 from '../Images/Icons/map.svg'
import logo5 from '../Images/Icons/list.svg'
import logo6 from '../Images/Icons/diamond.svg'
import logo7 from '../Images/Icons/notification.svg'

const iconHash = {
  DASHBOARD: logo1,
  "USER PROFILE": logo2,
  TYPOGRAPHY: logo3,
  MAPS: logo4,
  "TABLE LIST": logo5,
  ICONS: logo6,
  NOTIFICATIONS: logo7,
};

const Section = props => {
  const green = '#3dff91'
  return <div className={"section-wrapper "}>
    <img className="icon"  src={iconHash[props.name]} alt="icon"/>
    <p style={{color: props.active ? green : 'white', fontWeight: '600', fontSize: '14px'}}>{props.name}</p>
  </div>
};

export default Section;
