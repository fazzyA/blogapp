import { createStore } from "redux";
import myreducer from "./reducer";

const store = createStore(myreducer);
export default store;
