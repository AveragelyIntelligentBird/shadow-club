import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replies: [] as any[], 
};

// Idk if we want to be able to update, will leave for now. Also needs ID overhaul.
const repliesSlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    // Action carries payload for details of the reply
    addReply: (state, { payload: reply }) => { 
      state.replies = [...state.replies, {
        ...reply,
        _id: new Date().getTime().toString(),
      }];
      console.log(state.replies);
    },
    deleteReply: (state, { payload: rid }) => {
      state.replies = state.replies.filter((r) => r._id !== rid);
    },
    updateReply: (state, { payload: reply }) => {
      state.replies = state.replies.map((r) =>
        r._id === reply._id ? reply : r
      );
      console.log(state.replies);
    },
    setReplies: (state, action) => {
      state.replies = action.payload;
    },
  },
});
export const { addReply, deleteReply, updateReply, setReplies } =
repliesSlice.actions;
export default repliesSlice.reducer;