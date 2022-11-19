import { combineReducers } from "redux";
import counterReducer from "./counterReducer.jsx";

const reducersContainer = combineReducers({
    counterReducer
});

export default reducersContainer

