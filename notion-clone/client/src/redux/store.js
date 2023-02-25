import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./futures/userSlice";
import memoReducer from "./futures/memoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    memo: memoReducer,
  },
});
