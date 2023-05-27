import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import ModalMovie from '../ModalMovie/ModalMovie';

function Favlist() {
    const [movies, setMovies] = useState([]);
    const [targetMovie, setTargetMovie] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getMovies() {
        axios
            .get(`https://moviesapi-5cja.onrender.com`)
            .then((res) => {
                setMovies(res.data);
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getMovies();
    }, []);

    function handleDelete(target) {
        setTargetMovie(target);
        axios
            .delete(`https://moviesapi-5cja.onrender.com/movies/${target.id}`)
            .then((res) => {
                console.log(res);
                setMovies(movies.filter((e) => e.id !== target.id));
            })
            .catch((err) => console.log(err));
    }

    function handleUpdate(e, target) {
        setTargetMovie(target);
        axios
            .put(`https://moviesapi-5cja.onrender.com/movies/${target.id}`, {
                comments: e.target.value,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    // Divide movies into rows with a specific number of columns
    function divideMoviesIntoRows(movies, columns) {
        const rows = [];
        const totalMovies = movies.length;
        const rowsCount = Math.ceil(totalMovies / columns);

        for (let i = 0; i < rowsCount; i++) {
            const rowMovies = movies.slice(i * columns, (i + 1) * columns);
            const row = (
                <div key={`row-${i}`} style={{ display: 'flex', marginBottom: '20px' }}>
                    {rowMovies.map((movie) => (
                        <Movie
                            movie={movie}
                            key={movie.id}
                            setTargetMovie={setTargetMovie}
                            setShow={setShow}
                            setMovies={setMovies}
                            onFav={true}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            );
            rows.push(row);
        }

        return rows;
    }

    return (
        <div>
            {divideMoviesIntoRows(movies, 3)}
            <ModalMovie
                handleUpdate={handleUpdate}
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                targetMovie={targetMovie}
            />
        </div>
    );
}

export default Favlist;

