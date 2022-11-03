import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

const imageAPI = "https://image.tmdb.org/t/p/w500/";
const MovieList = ({ title, poster_path, id }) => {
  const navigate = useNavigate();
  return (
    <div className="movie">
      <img
        className="img"
        src={poster_path ? imageAPI + poster_path : require("./img/404.jpg")}
        alt="movie-image"
      ></img>

      <div className="movie-info">
        <h4 style={{ fontSize: 15 }}>{title}</h4>
      </div>

      <Button
        variant="dark"
        onClick={() => navigate(`/detail/${id}`)}
        style={{ marginBottom: 7 }}
      >
        Detail
      </Button>
    </div>
  );
};

export default MovieList;
