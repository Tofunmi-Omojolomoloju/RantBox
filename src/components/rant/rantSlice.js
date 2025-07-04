import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rants: [],
  streak: 0,
  lastPostDate: null,
};

const rantSlice = createSlice({
  name: "rant",
  initialState,
  reducers: {
    addRant: (state, action) => {
      const today = new Date().toDateString();
      const alreadyPostedToday = state.lastPostDate === today;

      state.rants.unshift({
        id: Date.now(),
        text: action.payload.text,
        mood: action.payload.mood,
        date: today,
      });

      if (!alreadyPostedToday) {
        state.streak += 1;
        state.lastPostDate = today;
      }
    },
  },
});

export const { addRant } = rantSlice.actions;
export default rantSlice.reducer;