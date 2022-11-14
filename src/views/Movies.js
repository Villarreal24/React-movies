import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const Movies = (props) => {
    // console.log(props)
    const [arrayData, setArrayData] = useState([]);
    // console.log(arrayData)

    useEffect(() => {
        const { data } = axios.get("http://localhost:5000/api/movies/all")
            .then((res) => {
                if (res.status === parseInt('200')) {
                    res.data.results.map(item => {
                        item.poster_path = 'https://image.tmdb.org/t/p/w500' + item.poster_path
                    })
                    setArrayData(res.data.results)
                } else {
                    console.log("Error de conexion o con el servidor")
                }
            })

    }, [])

    return (
        <div className='mt-5'>
            <Row xs={1} md={3} lg={4} xl={5} className="g-4">
                {arrayData.map(item => (
                    <Col key={item.id}>
                        <Card style={{ height: '28.6rem', width: '13rem' }}>
                            <Card.Img style={{ height: '17rem' }} variant="top" src={item.poster_path} />
                            <Card.Body>
                                <h6>{item.original_title}</h6>
                                <Card.Text aria-setsize={10}>Votaciones: {item.vote_count}</Card.Text>
                                <Card.Text>Valoracion: {item.vote_average}</Card.Text>

                                <Button variant="outline-secondary"
                                    size='sm'
                                    onClick={() => {
                                        props.setShow()
                                        props.dataMovies(item)
                                    }}>
                                    Agregar al carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Movies;