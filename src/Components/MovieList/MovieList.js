import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Movie from '../Movie/Movie';

function MovieList({ movies, setTargetMovie, setShow }) {
    return (
        <Row>
            {movies.map(movie => (
                <Col key={movie.id} sm={6} md={4} lg={3}>
                    <Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} />
                </Col>
            ))}
        </Row>
    );
}

export default MovieList;
