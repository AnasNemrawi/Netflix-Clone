import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import axios from 'axios';
import ModalMovie from '../ModalMovie/ModalMovie';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [targetMovie, setTargetMovie] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getTrending() {
        axios
            .get('https://moviesapi-5cja.onrender.com/trending')
            .then((res) => res.data)
            .then((data) => setTrendingMovies(data.results))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getTrending();
    }, []);

    return (
        <Container>
            {trendingMovies.map((movie, index) => (
                (index % 4 === 0) && (
                    <Row key={`row-${index / 4}`}>
                        <Col md={3}>
                            <Movie
                                movie={movie}
                                setTargetMovie={setTargetMovie}
                                setShow={setShow}
                                key={movie.id}
                            />
                        </Col>
                        {trendingMovies[index + 1] && (
                            <Col md={3}>
                                <Movie
                                    movie={trendingMovies[index + 1]}
                                    setTargetMovie={setTargetMovie}
                                    setShow={setShow}
                                    key={trendingMovies[index + 1].id}
                                />
                            </Col>
                        )}
                        {trendingMovies[index + 2] && (
                            <Col md={3}>
                                <Movie
                                    movie={trendingMovies[index + 2]}
                                    setTargetMovie={setTargetMovie}
                                    setShow={setShow}
                                    key={trendingMovies[index + 2].id}
                                />
                            </Col>
                        )}
                        {trendingMovies[index + 3] && (
                            <Col md={3}>
                                <Movie
                                    movie={trendingMovies[index + 3]}
                                    setTargetMovie={setTargetMovie}
                                    setShow={setShow}
                                    key={trendingMovies[index + 3].id}
                                />
                            </Col>
                        )}
                    </Row>
                )
            ))}
            <ModalMovie
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                targetMovie={targetMovie}
            />
        </Container>
    );
}

export default MovieList;

