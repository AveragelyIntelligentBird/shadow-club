import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./Profile/reducer";
import repliesReducer from "./Replies/reducer";
import postsReducer from "./Posts/reducer";
import accountReducer from "./Login/reducer";

const store = configureStore({
  reducer: {
    profilesReducer,
    repliesReducer,
    postsReducer,
    accountReducer,
  }
});
export default store;