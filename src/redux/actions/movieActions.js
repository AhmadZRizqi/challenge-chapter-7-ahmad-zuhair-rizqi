import axios from "axios";

import {
  getAllMoviesReducer,
  getDetailMoviesReducer,
  searchMoviesReducer,
} from "../reducers/movieReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=cf87462aff878f20a02d5d0d442ddb61"
    );

    dispatch(getAllMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getDetailMovies = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cf87462aff878f20a02d5d0d442ddb61&language=en-US`
    );

    dispatch(getDetailMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const searchMovies = (search) => async (dispatch) => {
  if (search) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cf87462aff878f20a02d5d0d442ddb61&query=${search}`
      );

      dispatch(searchMoviesReducer(data));
    } catch (error) {
      throw error;
    }
  }
};
