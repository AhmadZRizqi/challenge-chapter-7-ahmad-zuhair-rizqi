import { useState, useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UncontrolledExample from "../components/Carousel";
import "../App.css";
import MovieList from "../components/MovieList";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, searchMovies } from "../redux/actions/movieActions";

function Home({ token, setToken }) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [search, setSearch] = useState("");
  const [mencari, setMencari] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return alert("Mohon isi terlebih dahulu!");
    dispatch(searchMovies(search));
    setSearch("");
    setMencari(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleRefresh = () => {
    dispatch(getAllMovies());
    setMencari(false);
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

      <section id="movieList">
        {mencari ? (
          <>
            <h1 style={{ marginTop: 22 }}>Hasil Pencarian</h1>
            <Button onClick={handleRefresh}>
              Back <RiArrowGoBackFill />
            </Button>
          </>
        ) : (
          <h1 style={{ marginTop: 22 }}>Popular Movies</h1>
        )}

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
