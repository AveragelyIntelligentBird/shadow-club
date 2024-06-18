import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./Profile/ProfileReducer";
import repliesReducer from "./Replies/reducer";
import postsReducer from "./Posts/reducer";
import AccountReducer from "./Login/AccountReducer";

const store = configureStore({
  reducer: {
    profilesReducer,
    repliesReducer,
    postsReducer,
    AccountReducer,
  }
});
export default store;