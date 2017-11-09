import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { keaReducer } from "kea";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  kea: keaReducer("kea")
  // your reducer here
});
