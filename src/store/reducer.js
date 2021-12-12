import React from "react";

const initialState = {
  counter: 0,
  data: [],
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

    default:
      return state;
  }
}

export default myreducer;
