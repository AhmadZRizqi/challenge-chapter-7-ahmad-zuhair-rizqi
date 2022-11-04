import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Detail.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovies } from "../redux/actions/movieActions";

const Detail = () => {
  const imageAPI = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getDetailMovies(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="detail-page">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Movie Detail</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link onClick={() => navigate(`/`)} className="btn-home">
                  Home
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="movie-detail">
        <h4 style={{ fontSize: 33, marginTop: 10 }}>
          {movies ? movies.title : "Loading..."}
        </h4>
        <img
          className="img-detail"
          src={movies ? imageAPI + movies.poster_path : "Loading..."}
          style={{ width: 150 }}
        ></img>
        <h5 style={{ fontSize: 15 }}>
          <AiFillStar /> {movies ? movies.vote_average : "Loading..."}
        </h5>
        <h5 style={{ fontSize: 15 }}>
          Release Date: {movies ? movies.release_date : "Loading..."}
        </h5>
        <h5 style={{ fontSize: 15 }}>
          Genres: {movies?.genres?.map((movies) => movies.name + " ")}
        </h5>
        <hr className="seperator" />
        <h5 style={{ fontSize: 15 }}>SINOPSIS</h5>
        <a style={{ marginRight: 3, marginLeft: 3 }}>
          {movies ? movies.overview : <h1>Loading...</h1>}
        </a>
      </div>
    </div>
  );
};

export default Detail;
