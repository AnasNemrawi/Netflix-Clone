import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function ModalMovie({ targetMovie, handleClose, handleShow, show, onFav }) {
    const [inputValue, setInputValue] = useState("");
    function handleAddToDatabase(e) {
        e.preventDefault();
        handleClose();
        axios.post(`https://moviesapi-5cja.onrender.com/movies`, targetMovie)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    function handleUpdate(e) {
        e.preventDefault()
        axios.put(`https://moviesapi-5cja.onrender.com/${targetMovie.id}`, e.target.comment)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <img className='w-[100%] h-[400px]' src={`http://image.tmdb.org/t/p/w500/${targetMovie.poster_path}`} alt="movie IMG" />
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>{targetMovie.title}</Modal.Title>
                    {targetMovie.overview}
                </Modal.Body>
                {onFav ?
                    <Form onSubmit={(e) => handleUpdate(e)}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default" onChange={(e) => setInputValue(e.target.value)}
                            >
                                Comment
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Comment"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" >
                                Update Comment
                            </Button>
                        </Modal.Footer>
                    </Form>
                    :
                    <Form onSubmit={(e) => handleAddToDatabase(e)}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default" onChange={(e) => setInputValue(e.target.value)}
                            >
                                Comment
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Comment"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit' >
                                Add to Favorite list
                            </Button>
                        </Modal.Footer>
                    </Form>
                }

            </Modal>
        </div>
    );

}

export default ModalMovie
