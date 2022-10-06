import  { useState, useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
import UncontrolledExample from "./Carousel";

import '../App.css';
import MovieList from "./MovieList";

function Home() {
    const searchAPI="https://api.themoviedb.org/3/search/movie?api_key=cf87462aff878f20a02d5d0d442ddb61&query";
    const moviesAPI="https://api.themoviedb.org/3/movie/popular?api_key=cf87462aff878f20a02d5d0d442ddb61";
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [refetchData, setRefetchData] = useState(true);

//   const fetchData = async () => {
//     setLoading(true);
//     axios({
//       method: 'GET',
//       url:  `https://api.themoviedb.org/3/movie/popular?api_key=cf87462aff878f20a02d5d0d442ddb61`,
//     })
//       .then((res) => {
//         setData(res?.data);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setLoading(false);
//         setRefetchData(false);
//       });
//   };

//   useEffect(() => {
//     if (refetchData) {
//       fetchData();
//     }
//   }, [refetchData]);

  useEffect(() => {
    getMovies(moviesAPI);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res)=>res.json())
    .then((data) => {
      setData(data.results);
    })
  }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch(searchAPI+search)
//         .then((res)=>res.json())
//         .then((data) => {
//         setData(data.results);
//         })
//   };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if (search) {
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=cf87462aff878f20a02d5d0d442ddb61&query=${search}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setData(data.results);
          }
          catch(e){
            console.log(e);
          }
          setSearch("");
        } else if (search === "") {
            alert("Mohon isi input")
        }
    }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Movie List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="/" className="btn-home" >Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="#movieList" className="btn-home" >Movie</Nav.Link>
                    </Nav.Item>

                    <Form className="search-bar" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={handleChange}></Form.Control>
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div>
            <UncontrolledExample />
        </div>

        {search ? (<h1 style={{ marginTop: 22 }}>Search Result</h1>):(<h1 style={{ marginTop: 22 }}>Popular Movie</h1>)}
        
        <section id="movieList">
            <div className="movie-container">
                {data.length > 0 ? (data.map((dataMovie)=><MovieList key={dataMovie.id} {...dataMovie}/> )):(<h1>Loading...</h1>)}
            </div>
        </section>

    </div>
  );
}

export default Home;
