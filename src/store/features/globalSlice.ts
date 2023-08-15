import { createSlice } from "@reduxjs/toolkit";

type GlobalState = {};

const initialState: GlobalState = {};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});
export const {} = globalSlice.actions;
export default globalSlice.reducer;
