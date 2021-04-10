export const increment = () => {
  return {
    type: "counter/incremented",
  };
};

export const changeText = value => {
  return {
    type: "changeText",
    payload: value,
    hobos: value.toUpperCase(),
  };
};
