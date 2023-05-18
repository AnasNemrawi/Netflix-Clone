import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

function ModalMovie({ show, handleClose, singleMovie }) {
    const saveMovie = () => {
        axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/movie`, singleMovie)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{singleMovie.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={singleMovie.thumbnail} alt="" />
                <p>{singleMovie.description}</p>
                <p>{singleMovie.rating}</p>
                <p>Stock: {singleMovie.stock} - Price: ${singleMovie.price}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={saveMovie}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalMovie;
