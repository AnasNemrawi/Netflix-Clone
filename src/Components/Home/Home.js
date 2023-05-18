import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

export default function Home() {
    const [movieData, setMovieData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_MOVIE}?limit=10`);
            setMovieData(res.data.movieData);
        } catch (err) {
            console.log(err);
        }
    }

    function updateMovie(newMovie, id) {
        let updatedMovie = movieData.map(movieElement => {
            if (movieElement.id === id) {
                movieElement.myrate = newMovie.retComment;
                return movieElement;
            } else {
                return movieElement;
            }
        });
        setMovieData(updatedMovie);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            {movieData.length > 0 && <MovieList data={movieData} updateMovie={updateMovie} />}
        </Container>
    );
}
