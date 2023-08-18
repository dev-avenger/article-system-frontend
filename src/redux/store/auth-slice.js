import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  accessToken: null,
  accountType: null,
  market: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    isLoggedInToggle(state) {
      // state.isLoggedIn = !state.isLoggedIn;
    },
    loginHandler(state, action) {
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.accountType = action.payload.accountType;
      state.market = action.payload.market;
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      localStorage.clear();
      state.acessToken = null;
      state.userId = null;
      state.market = null;
      state.accountType = null;
      state.isLoggedIn = false;
    },
    updateUserDetails(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payloadd.lastName;
      state.emailAddress = action.payload.email;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
