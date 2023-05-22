import React from 'react'

import { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function FavList() {

    const [favoriteMovie, setFavoriteMovie] = useState()

    async function getFavoriteMove() {
        let url = `${process.env.REACT_APP_SERVER}/getallMovies`
        let response = await fetch(url)
        let favoriteMovie = await response.json()
        setFavoriteMovie(favoriteMovie)

    }

    async function handelDelete(id) {
        let url = `${process.env.REACT_APP_SERVER}/deleteMovie/${id}`
        let response = await fetch(url, {
            method: 'DELETE',
        })

        if (response.status === 200) { getFavoriteMove(); alert('Successfully Deleted') }

    }



    useEffect(() => {
        getFavoriteMove()
    }, [])


    return (
        <Container>
            <Row>
                {favoriteMovie && favoriteMovie.map(eachCard => {
                    return (
                        <Col xs={12} md={3} style={{ padding: 20 }}>
                            <Card className="text-center" key={eachCard.id} >
                                <Card.Header>{eachCard.title}</Card.Header>
                                <Card.Body>
                                    {/* <Card.Img src={eachCard.poster_path} alt={'image here '} /> */}
                                    <Card.Text>Id :
                                        {eachCard.id}
                                    </Card.Text>
                                    <Card.Text> MY Comment :
                                        {
                                            eachCard.myrate ? eachCard.myrate : 'No comments '
                                        }
                                    </Card.Text>

                                    <Button variant="danger" onClick={() => { handelDelete(eachCard.id) }} >Delete</Button>
                                </Card.Body>

                            </Card>
                        </Col>

                    )
                })}
            </Row>
        </Container>
    )
}

export default FavList


