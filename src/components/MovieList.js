import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { BiDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const imageAPI="https://image.tmdb.org/t/p/w500/";
const MovieList = ({title, poster_path, vote_average, release_date, overview, id})=>{
    const navigate = useNavigate();
    return(
        <div className="movie">
            <img className="img" src={imageAPI+poster_path}></img>
            
            <div className='movie-info'>
                <h4>{title}</h4>
                <BiDetail 
                    onClick={() => navigate(`/detail/${id}`)}
                />
            </div>
        </div>
    );
}

export default MovieList;