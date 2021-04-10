import react, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { increment, changeText } from "../../Redux/actions";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

// import './Styles/typography.scss'

const ReduxPlaying = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.value);
  const message = useSelector(state => state.test);

  function* g1() {
    console.log("Sup bro");
    yield "Yield 1 Ran..";
    console.log("World");
    yield "Yield 2 Ran..";
    return "Returned..";
  }

  var g = g1();

  useEffect(() => {
    for (let val of g) {
      console.log(val);
    }
  });

  const clicked = () => {
    dispatch(increment());
  };

  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="reduxPlaying-window"
    >
      <p>SSSSSSS</p>
      <div onClick={() => clicked()}>shit here</div>
      {"counter: " + counter}
      {"message: " + message}
      <input onChange={(e) => dispatch(changeText(e.target.value))}/>
    </motion.div>
  );
};

export default ReduxPlaying;
