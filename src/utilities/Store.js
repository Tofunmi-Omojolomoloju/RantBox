// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import rantReducer from "../features/rant/rantSlice";

export const store = configureStore({
  reducer: {
    rant: rantReducer,
  },
});
