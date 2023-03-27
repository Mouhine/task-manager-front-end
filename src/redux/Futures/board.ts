import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  title: string;
}

const initialState: CounterState = {
  title: "",
};

export const boardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBoardTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoardTitle } = boardSlice.actions;

export default boardSlice.reducer;
