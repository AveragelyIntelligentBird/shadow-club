import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./Profile/ProfileReducer";

const store = configureStore({
  reducer: {
    profilesReducer
  },
});
export default store;