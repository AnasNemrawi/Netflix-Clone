import React from 'react';
import Movie from '../Movie/Movie';
import Row from 'react-bootstrap/Row';

function MovieList({ movies, setShow, setTargetMovie }) {
    return (
        <Row>

            <div className='flex flex-wrap justify-around items-center w-[100%] h-[100%]'>
                {movies.map(movie => <Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} />)}

            </div>
        </Row>
    )
}

export default MovieList