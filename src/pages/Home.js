import { useState, useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Detail";
import UncontrolledExample from "../components/Carousel";
import "../App.css";
import MovieList from "../components/MovieList";
import Register from "./Register";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  getDetailMovies,
  searchMovies,
} from "../redux/actions/movieActions";

function Home({ token, setToken, setName }) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  // const searchAPI="https://api.themoviedb.org/3/search/movie?api_key=cf87462aff878f20a02d5d0d442ddb61&query";
  // const moviesAPI =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=cf87462aff878f20a02d5d0d442ddb61";
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // getMovies(moviesAPI);
    dispatch(getAllMovies());
    dispatch(getDetailMovies());
  }, []);

  // const getMovies = (API) => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.results);
  //     });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (search) {
  //     try {
  //       const url = `https://api.themoviedb.org/3/search/movie?api_key=cf87462aff878f20a02d5d0d442ddb61&query=${search}`;
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setData(data.results);
  //       alert("Success");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setSearch("");
  //   } else if (search === "") {
  //     alert("ERROR: Mohon isi input !!!");
  //   }
  // };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return alert("Mohon isi terlebih dahulu!");
    dispatch(searchMovies(search));
    setSearch("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="/">Movie List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-beetween"
          >
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/" className="btn-home">
                  Refresh
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#movieList" className="btn-home">
                  Movie
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav>
              <Form className="search-bar" onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={handleChange}
                ></Form.Control>
                <Button variant="danger" type="submit">
                  Search
                </Button>
              </Form>
            </Nav>

            {!token ? (
              <Nav>
                <div className="btn-login-regis">
                  <Button
                    variant="outline-danger"
                    onClick={() => navigate(`/login`)}
                  >
                    Login
                  </Button>
                  <Button
                    style={{ marginLeft: 5 }}
                    variant="outline-danger"
                    onClick={() => navigate(`/register`)}
                  >
                    Register
                  </Button>
                </div>
              </Nav>
            ) : (
              <Nav>
                <div className="btn-login-regis2">
                  <Button variant="outline-danger" onClick={handleLogout}>
                    Logout
                  </Button>
                  <Button style={{ marginLeft: 5 }} variant="outline-danger">
                    <FaUserCircle />
                  </Button>
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <UncontrolledExample />
      </div>
      {/* {search ? (<h1 style={{ marginTop: 22 }}>Search Result</h1>):(<h1 style={{ marginTop: 22 }}>Popular Movie</h1>)} */}

      <section id="movieList">
        <h1 style={{ marginTop: 22 }}>Popular Movies / Hasil Pencarian</h1>
        <div className="movie-container">
          {movies.results?.map(
            movies ? (
              (data) => <MovieList key={data.id} {...data} />
            ) : (
              <h1>Loading...</h1>
            )
          )}
        </div>
      </section>

      <footer>Ahmad Zuhair Rizqi [FEJS-2]</footer>
    </div>
  );
}

export default Home;
