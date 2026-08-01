import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../../utils/localStorage";

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    loginUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
    updateUserDatas: (state, { payload }) => {
      state.user = payload.user;
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
  },
});

export const { registerUser, loginUser, logoutUser, updateUserDatas } =
  userSlice.actions;

export default userSlice.reducer;
