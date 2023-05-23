import React from 'react';
import Movie from '../Movie/Movie';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList({ movies, setShow, setTargetMovie }) {
    return (
        <Row>
            {movies.map(movie => (
                <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} />
                </Col>
            ))}
        </Row>
    );
}

export default MovieList;
