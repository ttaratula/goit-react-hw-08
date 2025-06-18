import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    query: "",
  },
  reducers: {
    changeFilters(state, action) {
      state.query = action.payload;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectQueryFilter = (state) => state.filters.query;
