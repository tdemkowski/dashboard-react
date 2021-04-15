export const increment = () => {
  return {
    type: "counter/incremented",
  };
};

export const changeText = (value) => {
  return {
    type: "changeText",
    payload: value,
    upperCaseMe: value.toUpperCase(),
  };
};

export const sagaTime = () => {
  return { type: "saga_when", payload: "SAGA_when?" };
};
