import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from '../MovieList/MovieList'
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
            <MovieList movies={trendingMovies} setShow={setShow} setTargetMovie={setTargetMovie} />
            <ModalMovie handleClose={handleClose} handleShow={handleShow} show={show} targetMovie={targetMovie} />
        </div>
    )
}

export default Home