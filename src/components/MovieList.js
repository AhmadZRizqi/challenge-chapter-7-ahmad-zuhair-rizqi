import {Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


const imageAPI="https://image.tmdb.org/t/p/w500/";
const MovieList = ({title, poster_path, vote_average, release_date, overview, id})=>{
    const navigate = useNavigate();
    return(
        <div className="movie">
            <img className="img" src={imageAPI+poster_path}></img>
            
            <div className='movie-info'>
                <h4 style={{ fontSize: 15 }}>{title}</h4>
            </div>

            <Button variant="dark" onClick={() => navigate(`/detail/${id}`)} style={{ marginBottom: 7 }}>Detail</Button>
        </div>
    );
}

export default MovieList;