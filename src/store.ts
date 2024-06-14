import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./Profile/ProfileReducer";
import repliesReducer from "./Replies/reducer";
import postsReducer from "./Posts/reducer";

const store = configureStore({
  reducer: {
    profilesReducer,
    repliesReducer,
    postsReducer,
  }
});
export default store;