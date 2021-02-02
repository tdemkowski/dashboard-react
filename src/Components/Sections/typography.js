import react from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

import './Styles/typography.scss'

const Typography = () => {
  return (
    <motion.div
    style={{position: 'absolute'}}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="typography-window"
    >
      <p>Header 1:</p>
      <h1>This text represents Header 1</h1>
      <hr></hr>
      <p>Header 2:</p>
      <h2>This text represents Header 2</h2>
      <hr></hr>
      <p>Header 3:</p>
      <h3>This text represents Header 3</h3>
      <hr></hr>
      <p>Header 4:</p>
      <h4>This text represents Header 4</h4>
      <hr></hr>
      <p>Header 5:</p>
      <h5>This text represents Header 5</h5>
      <hr></hr>
      <p>Paragraph:</p>
      <p>This text represents a paragraph, but unfortunately I am too lazy to find lorem ipsum placeholder for it. So I guess you're stuck with this text for the reminder of the example. Isn't that just horrific? This text is even readable english! What kind of a placeholder is that supposed to be?
</p>
      <hr></hr>
      <p>Muted Text:</p>
      <p className="muted-text">And this text is a paragraph that is muted</p>
      <hr></hr>
      <p>Colors:</p>
      <p className="primary">Primary text color</p>
      <p className="info">Info text color</p>
      <p className="success">Success text color</p>
      <p className="warning">Warning text color</p>
      <p className="danger">Danger text color</p>

      <hr></hr>
    </motion.div>
  );
};

export default Typography;
