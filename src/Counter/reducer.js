import { createStore } from "redux";

export const myreducer = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      console.log("am in reducer");
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Rest":
      return (state = 0);
    default:
      return (state = 10);
  }
};

export const store = createStore(myreducer);
