import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';

function Movie({ movie, setTargetMovie, setShow }) {
    function handleShow() {
        setShow(true);
        setTargetMovie(movie);
        saveMovieToDatabase(movie.id);
    }

    function saveMovieToDatabase(movieId) {
        axios
            .post('/addMovie', { movieId })
            .then(res => {
                console.log('Movie saved to database successfully.');
            })
            .catch(err => {
                console.log('Error saving movie to database:', err);
            });
    }


    return (
        <Col>
            <Card className="" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview.slice(0, 75)}</Card.Text>
                    <Button variant="primary" onClick={() => handleShow()}>
                        Add to favorite
                    </Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Movie;

