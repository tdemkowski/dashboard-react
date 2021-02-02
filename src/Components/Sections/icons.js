import react from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

import './Styles/icons.scss'

const Icons = (props) => {
  const displayIcons = () => { // how to fix the lag when creating the icon components?
    return props.icons.map(i => {
      const iconName = i.file.default.split('/')[3].split('.')[0] || 'iconName'
      return (
        <div className="icon-display" key={i.path}>
          <img src={i.file.default} className="icon"></img>
          <p>{iconName}</p>
        </div>
      );
    });
  };

  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="icon-window"
    >
      <p>Hundreds of icons coming from <a href="https://www.flaticon.com/packs/essential-set-2">Essential Set</a></p>
      <div className="icon-display-wrapper">
        {displayIcons()}
      </div>
    </motion.div>
  );
};

export default Icons;
