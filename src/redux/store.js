import { createStore } from "react-redux";

const initialState = {
  countValue: 0
};

const reducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  return state;
};

const store = createStore(reducer);

export default store;
