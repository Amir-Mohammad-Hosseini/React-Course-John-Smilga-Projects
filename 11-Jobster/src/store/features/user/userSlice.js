import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload));

    },
    loginUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logoutUser: (state) => {
      localStorage.removeItem("user")
      state.user = null;
    },
    updateUserDatas : (state , {payload}) => {
      state.user = payload.user
      localStorage.setItem("user" , JSON.stringify(payload.user))
    }
  },
});

export const { registerUser ,loginUser, logoutUser , updateUserDatas } = userSlice.actions;

export default userSlice.reducer;
