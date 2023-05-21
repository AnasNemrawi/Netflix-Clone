import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function ModalMovie({ targetMovie, handleClose, handleShow, show }) {
    const [inputValue, setInputValue] = useState("")
    function handleAddToDatabase() {
        handleClose();
        axios.post(`${process.env.REACT_APP_DATABASE}`, inputValue)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
    console.log(inputValue)
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{targetMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {targetMovie.overview}
                </Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" value={(e) => setInputValue(e.target.value)}
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
                    <Button variant="primary" onClick={() => handleAddToDatabase()}>
                        Add to database
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default ModalMovie