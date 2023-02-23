// the app needs to know whether there is a logged in user at all times
// auth needs to be wrapped around the whole app so makes sense to add to redux
// if this works then import to app.js and can handle which stack is used

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    authenticated: false,
  },
  reducers: {
    setUserAuthenticationToken: (state, action) => {
      state.token = action.payload;
    },
    authenticateUser: (state, action) => {
      state.authenticated = action.payload;
      // change to true when the token and user gets authenticated
    },
  },
});

export const { setUserAuthenticationToken, authenticateUser } =
  authSlice.actions;
export default authSlice.reducer;
