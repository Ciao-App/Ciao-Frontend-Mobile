import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'userPost',
  initialState: {
    posts: [],
  },
  reducers: {
    setUserPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setUserPosts } = postSlice.actions;
export default postSlice.reducer;
