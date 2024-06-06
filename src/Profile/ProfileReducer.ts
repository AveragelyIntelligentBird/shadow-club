import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Database";
const initialState = {
  profiles: users,
};

const profilesSlice = createSlice({
    name: "profiles",
    initialState,
    reducers: {
        updateProfile: (state, {payload: profile}) => {
            state.profiles = state.profiles.map((p) =>
                p.uid === profile._id ? profile : p
            );
        },
    },

});
export const {
    updateProfile} =
  profilesSlice.actions;
export default profilesSlice.reducer;