import  { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import  { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import { AiFillStar } from 'react-icons/ai'

const Detail = ({})=>{
    const imageAPI="https://image.tmdb.org/t/p/w500/";
    const params = useParams();
    const navigate = useNavigate();
    // const detailAPI="https://api.themoviedb.org/3/movie/{movie_id}?api_key=cf87462aff878f20a02d5d0d442ddb61&language=en-US";
    const [currentData, setData] = useState([]);

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
            <div className="detail-page">
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

                <div className="movie-detail">
                    <h4 style={{ fontSize: 33, marginTop: 10 }}>{currentData? currentData.title : ""}</h4>
                    <img className="img-detail" src={imageAPI+(currentData? currentData.poster_path: "")} style={{ width: 200}}></img>
                    <h5 style={{ fontSize: 15 }}><AiFillStar/> {currentData? currentData.vote_average + " / 10" : ""}</h5>
                    <h5 style={{ fontSize: 15 }}>Release Date: {currentData? currentData.release_date : ""}</h5>
                    <h5 style={{ fontSize: 15 }}>Genre: {currentData?.genres?.map((item) => item.name + " ")}</h5>
                    <hr className="seperator" />
                    <h4 style={{ fontSize: 22 }}>Overview:</h4>
                    <a>{currentData? currentData.overview : ""}</a>
                </div>

            </div>
        );
    }

export default Detail;