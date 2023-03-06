import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'userPost',
  initialState: {
    posts: [],
    name: '',
    rating: '',
    city: '',
    state: '',
    address: '',
    pictures: '',
  },
  reducers: {
    setUserPosts: (state, action) => {
      state.posts = action.payload;
    },
    createNewPost: (state, action) => {
      state.name = action.payload;
      state.rating = action.payload;
      state.city = action.payload;
      state.state = action.payload;
      state.address = action.payload;
      state.pictures = action.payload;
    },
  },
});

export const { setUserPosts, createNewPost } = postSlice.actions;
export default postSlice.reducer;
