import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import actions from "./actions";

const reducer = combineReducers({
  contacts: actions,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
