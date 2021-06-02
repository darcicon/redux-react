import { createStore } from "redux";

const initState = {
  message: "Test",
  counter: 0,
  list: [],
};

function AppReducer(state = initState, action) {
  switch (action.type) {
    case "POST":
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };

    default:
      return state;
  }
}

const store = createStore(AppReducer);
export { store };
