function counterReducer(state = { value: 0, test: "blabla" }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "tardshit":
      return { ...state, test: "bla" };
    case "changeText":
      return { ...state, test: action.payload + action.hobos };
    case "@@INIT":
      return { value: state.value + 5, test: "tard" };
    default:
      return state;
  }
}

function bitchReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default counterReducer;
