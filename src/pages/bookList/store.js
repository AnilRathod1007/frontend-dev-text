import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksList: [],
  pagination: {},
};

const bookListSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooklist(state, action) {
      state.booksList = [...action.payload.booksList];
    },
    getPagination(state, action) {
      state.pagination = { ...action.payload.pagination };
    },
  },
});

export default bookListSlice.reducer;

export const bookListActions = bookListSlice.actions;
