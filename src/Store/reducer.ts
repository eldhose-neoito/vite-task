import { combineReducers } from "redux";
import Data from "./Data/reducer";
const rootReducer = combineReducers({
  Data,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
