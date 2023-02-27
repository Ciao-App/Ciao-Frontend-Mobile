import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    authenticated: false,
  },
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.authenticated = action.payload.authenticated;
    },
    logoutAuthenticatedUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.authenticated = action.payload.authenticated;
    },
  },
});

export const { setAuthenticatedUser, logoutAuthenticatedUser } =
  authSlice.actions;
export default authSlice.reducer;
