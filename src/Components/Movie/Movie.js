
import React from 'react';

function Movie({ movie, setTargetMovie, setShow, onFav, handleDelete, handleUpdate }) {
    function handleShow() {
        setShow(true);
        setTargetMovie(movie);
    }

    return (
        <div>
            <div>
                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                {onFav ? (
                    <div>
                        <button onClick={() => handleUpdate()}>Update</button>
                        <button onClick={() => handleDelete(movie)}>Delete</button>
                    </div>
                ) : (
                    <button onClick={() => handleShow()}>Add To Favorites</button>
                )}
            </div>
        </div>
    );
}

export default Movie;

