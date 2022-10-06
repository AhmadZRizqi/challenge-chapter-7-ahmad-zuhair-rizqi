import  { useState, useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import  { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = ({original_title, title, poster_path, vote_average, release_date, overview})=>{
    const imageAPI="https://image.tmdb.org/t/p/w500/";
    const params = useParams();
    const navigate = useNavigate();
    // const detailAPI="https://api.themoviedb.org/3/movie/{movie_id}?api_key=cf87462aff878f20a02d5d0d442ddb61&language=en-US";
    const [currentData, setData] = useState([]);

    // const getDetailMovies = () => {
    //     fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=cf87462aff878f20a02d5d0d442ddb61&language=en-US`)
    //     .then((res)=>res.json())
    //     .then((data) => {
    //     setData(data.results);
    //     })
    // }

    useEffect(() => {
        if (params.id){
            fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=cf87462aff878f20a02d5d0d442ddb61&language=en-US`)
            .then((res)=>res.json())
            .then((data) => {
            setData(data);
            })
        }
    }, [params.id]);
    
        return (
            <div className="movie-detail">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand>Movie Detail</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link onClick={() => navigate(`/`)} className="btn-home" >Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <img className="img" src={imageAPI+(currentData? currentData.poster_path: "")}></img>
                <h4>{currentData? currentData.title : ""}</h4>
                <h5 style={{ fontSize: 15 }}>Rate: {currentData? currentData.vote_average : ""}</h5>
                <h5 style={{ fontSize: 15 }}>Release Date: {currentData? currentData.release_date : ""}</h5>
                <a>Overview: {currentData? currentData.overview : ""}</a>
            </div>
        );
    }

export default Detail;