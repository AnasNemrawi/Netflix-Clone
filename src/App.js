import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './Components/MovieList/MovieList';
import ModalMovie from './Components/ModalMovie/ModalMovie';
import Row from 'react-bootstrap/Row';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Import Route from react-router-dom
import FavList from './Components/FavList/FavList'; // Import FavList component
import './App.css';


function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [targetMovie, setTargetMovie] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(process.env)
  function getTrending() {
    axios.get(`${process.env.REACT_APP_URL}/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=end-US`)
      .then(res => setTrendingMovies(res.data.results))
      .catch(err => console.log(err));
  }
  useEffect(() => {
    getTrending()
  }, [])
  return (
    <div>
      <header>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/FavList' element={<FavList />} />
          </Routes>
        </Router>
      </header>


      <Row>
        <MovieList movies={trendingMovies} setShow={setShow} setTargetMovie={setTargetMovie} />
        <ModalMovie handleClose={handleClose} handleShow={handleShow} show={show} targetMovie={targetMovie} />
      </Row>
    </div>
  );
}

export default Home