import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./contactsAction";

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
