import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./effects";
import reducers from "./reducers";

const reducer = combineReducers(reducers);
const epicMiddleware = createEpicMiddleware();

export const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
