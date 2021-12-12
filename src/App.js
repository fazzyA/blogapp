import {useState} from 'react'
import "./App.css";
import CounterDisplay from "./CounterDisplay";
import CounterInput from "./CounterInput";

function App() {
  return (
    <div>
      <CounterDisplay />
      <CounterInput />
    </div>
  );
}

export default App;
