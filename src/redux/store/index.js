import { configureStore } from "@reduxjs/toolkit";
import Auth from "./auth-slice";


const store = configureStore({
  reducer: {
    authReducer: Auth,
  },
});

export default store;