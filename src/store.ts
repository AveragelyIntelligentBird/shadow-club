import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./Account/Profile/reducer";
import repliesReducer from "./Replies/reducer";
import postsReducer from "./Posts/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    profilesReducer,
    repliesReducer,
    postsReducer,
    accountReducer,
  }
});
export default store;