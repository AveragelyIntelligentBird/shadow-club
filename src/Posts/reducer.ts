import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [] as any[], 
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Action carries payload for details of the post
    addPost: (state, { payload: post }) => { 
      state.posts = [...state.posts, {
        ...post,
        _id: new Date().getTime().toString(),
      }];
      console.log(state.posts);
    },
    deletePost: (state, { payload: pid }) => {
      state.posts = state.posts.filter((p) => p._id !== pid);
    },
    updatePost: (state, { payload: post }) => {
      state.posts = state.posts.map((p) =>
        p._id === post._id ? post : p
      );
      console.log(state.posts);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { addPost, deletePost, updatePost, setPosts } =
postsSlice.actions;
export default postsSlice.reducer;