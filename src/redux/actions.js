import { combineReducers } from "redux";

export const items = (state = [], action) => {
  return state;
};

export const filter = (state = [], action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
// export const items = (state = [], action{type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]

//         default:
//             return state
//   }
// };
