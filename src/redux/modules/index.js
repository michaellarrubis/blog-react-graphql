import { combineReducers } from "redux";
// reducerImports   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import comment from "./comment/commentReducer";
import post from "./post/postReducer";
import utils from "./utils/utilsReducer";
import auth from "./auth/authReducer";

const reducer = combineReducers({
  utils,
  comment,
  post,
  auth,
});

export default reducer;
