import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state, { payload }) => {
      state.isSidebarOpen = payload;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;

export default uiSlice.reducer;
