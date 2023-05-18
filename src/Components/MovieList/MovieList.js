import React from 'react';
import { Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';

function MovieList({ data, updateMovie }) {
    return (
        <Row>
            {data.map((singleData) => (
                <Movie
                    singleData={singleData}
                    key={singleData.id}
                    updateMovie={updateMovie}
                />
            ))}
        </Row>
    );
}

export default MovieList;
