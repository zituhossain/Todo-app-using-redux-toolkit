import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "zitu" },
  { id: "1", name: "tipu" },
  { id: "3", name: "ritu" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
