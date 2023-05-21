import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
function Movie({ movie, setTargetMovie, setShow }) {
    function handleShow() {
        setShow(true)
        setTargetMovie(movie)
    }
    // const [images,setImages]=useState([]);
    // useEffect(()=>{
    //   axios.get(`${process.env.REACT_APP_URL}/movie/${movie.id}/images?api_key=${process.env.REACT_APP_KEY}`)
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err));
    // },[])
    return (
        <div className=''>
            <Col>
                <Card className='' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview.slice(0, 75)}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleShow()}>Add to favorite</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>


    )
}

export default Movie