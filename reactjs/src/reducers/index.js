import { combineReducers } from "redux";

import { message } from "./message.reducer";
import { alert } from "./alert.reducer";
// import { posts } from './post.reducer';
// import { stories } from './story.reducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  alert,
  message: message,
  form: formReducer
});

export default rootReducer;
