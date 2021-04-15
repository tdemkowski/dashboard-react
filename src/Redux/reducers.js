import { actions } from "react-table";
import { combineReducers } from "redux";

function counterReducer(state = { value: 0, test: "blabla" }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "changeText":
      return { ...state, test: action.payload + action.upperCaseMe };
    case "@@INIT":
      return { value: state.value + 5, test: "initiate" };
    default:
      return state;
  }
}

function wheresMySagaReducer(state = { value: -1, test: "-11" }, action) {
  switch (action.type) {
    case "saga_when":
      return { ...state, value: "ABCD " + action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
  wheresMySagaReducer
})

export default rootReducer;
