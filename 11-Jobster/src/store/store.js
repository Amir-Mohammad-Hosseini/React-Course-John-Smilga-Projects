import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import uiReducer from "./features/ui/uiSlice";
import jobReducer from "./features/job/jobSlice";
const store = configureStore({
  reducer: {
    userState: userReducer,
    uiState: uiReducer,
    jobState: jobReducer,
  },
});

export default store;
