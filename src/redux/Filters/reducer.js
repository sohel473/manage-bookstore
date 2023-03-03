import { STATUSCHANGE, SEARCHING } from "./actionTypes";

const initialState = {
  status: "All",
  search: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case SEARCHING:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
