import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());
// const store = configureStore({
//   contacts: reducer,
//   filter: ''
// })

export default store;
