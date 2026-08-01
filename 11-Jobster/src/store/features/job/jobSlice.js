import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../../utils/localStorage";

const initialState = {
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: (state) => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    changeEditingStatus: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValues, changeEditingStatus } =
  jobSlice.actions;
