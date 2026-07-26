import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import uiReducer from "./features/ui/uiSlice";
const store = configureStore({
  reducer: {
    userState: userReducer,
    uiState: uiReducer,
  },
});

export default store;
