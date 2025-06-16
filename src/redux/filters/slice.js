// export const { changeFilters } = slice.actions;
// export default slice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: {
//     name: '',
//   },
//   reducers: {
//     setNameFilter(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setNameFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
// export default filtersSlice.reducer; 

// import { createSlice } from '@reduxjs/toolkit';

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: {
//     name: '',
//   },
//   reducers: {
//     setNameFilter(state, action) {
//       state.name = action.payload;
//     },
//   },
// });



// export const { setNameFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
// export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    query: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
export const selectNameFilter = (state) => state.filters.query;

