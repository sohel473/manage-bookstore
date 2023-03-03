import { combineReducers } from "redux";
import { reducer as bookReducer } from "../redux/Books/reducer";
import { reducer as filtersReducer } from "../redux/Filters/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  filters: filtersReducer,
});

export default rootReducer;
