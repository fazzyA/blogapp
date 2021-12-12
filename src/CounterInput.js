import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, arr } from "./store/actions";
const CounterInput = () => {
  const state = useSelector((state) => state);
  const {data, counter} = state;
  const dispatch = useDispatch();
  return (
    <div>
      <p>{data.map(item =>item)}</p>
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
      <button onClick={() => dispatch(arr())}>-</button>
    </div>
  );
};

export default CounterInput;
