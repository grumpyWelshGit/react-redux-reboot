import { createStore } from "redux";
import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  countValue: 0
};

const reducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  if (action.type === INCREMENT) {
    return {
      countValue: state.countValue + 1
    };
  }
  if (action.type === DECREMENT) {
    return {
      countValue: state.countValue - 1
    };
  }
  if (action.type === RESET) {
    return {
      countValue: 0
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
