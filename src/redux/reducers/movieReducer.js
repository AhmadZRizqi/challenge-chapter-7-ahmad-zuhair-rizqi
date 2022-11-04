import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    getDetailMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    searchMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const {
  getAllMoviesReducer,
  getDetailMoviesReducer,
  searchMoviesReducer,
} = movieSlicer.actions;

export default movieSlicer.reducer;
