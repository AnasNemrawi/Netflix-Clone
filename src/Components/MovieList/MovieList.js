import React from 'react';
import Movie from '../Movie/Movie';
function MovieList({ movies, setShow, setTargetMovie }) {
    return (
        <div className='flex flex-wrap justify-around items-center w-[100%] h-[100%]'>
            {movies.map(movie => <Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} />)}
        </div>
    )
}

export default MovieList