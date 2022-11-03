import { createSlice } from "@reduxjs/toolkit";

// The initial state when the application load in first time
const initialState = {
  movies: [],
};

// Define the reducers
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

// Export the reducer function, the functions will be called in actions
export const {
  getAllMoviesReducer,
  getDetailMoviesReducer,
  searchMoviesReducer,
} = movieSlicer.actions;

// Export the reducer to combine it with another reducers
export default movieSlicer.reducer;
