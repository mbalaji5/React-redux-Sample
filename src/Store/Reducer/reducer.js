import { createStore } from "redux";
import { Add_Todo } from "../Action/action";

export const myreducer = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Rest":
      return (state = 0);
    default:
      return (state = 10);
  }
};
const initialState = {
  item: [
    {
      id: 0,
      text: ""
    }
  ]
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Add_Todo:
      return [...state, { id: 1, text: action.text }];
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
