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
