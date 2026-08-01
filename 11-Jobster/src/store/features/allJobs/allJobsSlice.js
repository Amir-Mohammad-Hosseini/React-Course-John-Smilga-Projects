import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  search: "",
  status: "all",
  jobType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    changeFilterValue: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export default allJobsSlice.reducer;

export const { clearFilters, changeFilterValue, changePage } =
  allJobsSlice.actions;
