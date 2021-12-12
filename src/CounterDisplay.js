import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div>
      <h3>Counter = {counter}</h3>
    </div>
  );
};

export default CounterDisplay;
