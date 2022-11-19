import { createStore } from "redux";
import reducersContainer from "./reducers";

const store = createStore(reducersContainer);

export default store;