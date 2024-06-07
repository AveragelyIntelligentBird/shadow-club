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
        followProfile: (state, {payload: uids}) => {
            state.profiles = state.profiles.map((p) => {
                if (p.uid === uids.profileId) {
                    return {...p, profileData: {...p.profileData, followers: [...p.profileData.followers, uids.userId]}}
                } else if (p.uid === uids.userId) {
                    return {...p, profileData: {...p.profileData, following: [...p.profileData.following, uids.profileId]}}
                } else {
                    return p
                }
            });
        },
        unfollowProfile: (state, {payload: uids}) => {
            state.profiles = state.profiles.map((p) => {
                if (p.uid === uids.profileId) {
                    return {...p, profileData: {...p.profileData,
                            followers: p.profileData.followers.filter((f) => f !== uids.userId)
                    }}
                } else if (p.uid === uids.userId) {
                    return {...p, profileData: {...p.profileData,
                            following: p.profileData.following.filter((f) => f != uids.profileId)
                    }}
                } else {
                    return p
                }
            });
        }
    },

});
export const {
    updateProfile,
    followProfile,
    unfollowProfile
} =  profilesSlice.actions;
export default profilesSlice.reducer;