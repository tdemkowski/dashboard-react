import react, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { increment, changeText, sagaTime } from "../../Redux/actions";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";
import { pullAt } from "lodash";

// import './Styles/typography.scss'

const ReduxPlaying = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.value);
  const message = useSelector((state) => state.test);
  const asdf = useSelector((state) => state.asdf);

  function* g1() {
    console.log("Hi");
    yield "Yield 1 Ran..";
    console.log("World");
    yield "Yield 2 Ran..";
    return "Returned..";
    let x;
    yield call("https://jsonplaceholder.typicode.com/todos/1", x);
    yield put(x);
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

  const onSomeButtonClicked = () => {
    dispatch(sagaTime());
    // dispatch(increment());
  };

  function* sagaStuff(action) {
    // try {
    //   const things = yield call({ test: "test" }, action.payload.userId);
    //   yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    // } catch (e) {
    //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
    // }
  }

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
      <div onClick={() => clicked()}>things here</div>

      <input onChange={(e) => dispatch(changeText(e.target.value))} />
      <div
        style={{
          width: "10rem",
          height: "10rem",
          borderStyle: "solid",
          backgroundColor: "grey",
          color: "#fff",
        }}
        onClick={() => onSomeButtonClicked()}
      >
        {asdf}
        <div>{"counter: " + counter}</div>
        <div>{"message: " + message}</div>
      </div>
    </motion.div>
  );
};

export default ReduxPlaying;
