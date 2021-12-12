import React from "react";

const initialState = {
  counter: 0,
  data: ["item1"],
  str: "redux class",
};
function myreducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ARR":
      return {
        ...state,
        data: [...state.data, "item2"],
      };

    default:
      return state;
  }
}

export default myreducer;
