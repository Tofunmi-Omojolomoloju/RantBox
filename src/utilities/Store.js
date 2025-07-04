// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import rantReducer from "../components/rant/rantSlice";

export const store = configureStore({
  reducer: {
    rant: rantReducer,
  },
});
