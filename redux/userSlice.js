// slice - for defining state, data, and actions to change data
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  reducers: {
    //functions used to change our state
    onBodyChangeEmail: (state, action) => {
      // console.log('email:', state.email);
      state.email = action.payload;
    },
    onBodyChangeFirstName: (state, action) => {
      // console.log('first:', state.firstName);
      state.firstName = action.payload;
    },
    onBodyChangeLastName: (state, action) => {
      // console.log('last:', state.lastName);
      state.lastName = action.payload;
    },
    onBodyChangePassword: (state, action) => {
      // console.log('pass:', state.password);
      state.password = action.payload;
    },
  },
});

export const {
  onBodyChangeEmail,
  onBodyChangeFirstName,
  onBodyChangeLastName,
  onBodyChangePassword,
} = userSlice.actions;
export default userSlice.reducer;
