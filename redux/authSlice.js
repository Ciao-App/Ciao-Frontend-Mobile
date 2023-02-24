import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    authenticated: false,
    user: {},
  },
  reducers: {
    setUserAuthenticationToken: (state, action) => {
      state.token = action.payload;
    },
    authenticateUser: (state, action) => {
      state.authenticated = action.payload;
      // change to true when the token and user gets authenticated
    },
    setAuthenticatedUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUserAuthenticationToken,
  authenticateUser,
  setAuthenticatedUser,
} = authSlice.actions;
export default authSlice.reducer;
