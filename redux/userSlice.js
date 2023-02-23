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
      state.email = action.payload;
    },
    onBodyChangeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    onBodyChangeLastName: (state, action) => {
      state.lastName = action.payload;
    },
    onBodyChangePassword: (state, action) => {
      state.password = action.payload;
    },
    clearUserInputFields: (
      { email, firstName, lastName, password },
      action
    ) => {
      email, firstName, lastName, (password = action.payload);
    },
  },
});

export const {
  onBodyChangeEmail,
  onBodyChangeFirstName,
  onBodyChangeLastName,
  onBodyChangePassword,
  clearUserInputFields,
} = userSlice.actions;
export default userSlice.reducer;
