
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FavList() {
    const [data, setData] = useState([]);
    const [updatedData, setUpdatedData] = useState({});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://movielibrarydeployedat.onrender.com/addmovie');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.get(`https://movielibrarydeployedat.onrender.com/addmovie/${id}`);
            setUpdatedData({ ...response.data, id }); // Include the id in updatedData
            setShowForm(true);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://movielibrarydeployedat.onrender.com/addmovie/${updatedData.id}`, {
                title: updatedData.title,
                overview: updatedData.overview,
                comment: updatedData.comment,
            });
            setShowForm(false);
            fetchData();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://movielibrarydeployedat.onrender.com/addmovie/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
    console.log(data)
    return (
        <div className="container">
            <h1>Favorite Movies</h1>

            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.overview}</p>
                            <p className="card-text">{item.comment}</p>
                            <button className="btn btn-primary me-2" onClick={() => handleUpdate(item.id)}>Update</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Bear with us please</div>
            )}

            {showForm && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h3 className="card-title">Update Data</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={updatedData.title || ''}
                                    onChange={handleFormChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="overview" className="form-label">Overview:</label>
                                <textarea
                                    id="overview"
                                    name="overview"
                                    value={updatedData.overview || ''}
                                    onChange={handleFormChange}
                                    className="form-control"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label">Comment:</label>
                                <input
                                    type="text"
                                    id="comment"
                                    name="comment"
                                    value={updatedData.comment || ''}
                                    onChange={handleFormChange}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}