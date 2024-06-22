import { configureStore } from "@reduxjs/toolkit";
import repliesReducer from "./Replies/reducer";
import postsReducer from "./Posts/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    repliesReducer,
    postsReducer,
    accountReducer,
  }
});
export default store;