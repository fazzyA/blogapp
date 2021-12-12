import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./store/actions";
const CounterInput = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
    </div>
  );
};

export default CounterInput;
