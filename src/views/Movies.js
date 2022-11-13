import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import movie from '../movie.jpg';

const Movies = (props) => {
    // console.log(props)

    const array = [
        {
            id: 1,
            name: 'Deadpool',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$110'
        },
        {
            id: 2,
            name: 'Top Gun 2',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$130'
        },
        {
            id: 3,
            name: 'Stringer Things',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$120'
        },
        {
            id: 4,
            name: 'Busqueda Implacable 3',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$100'
        },
        {
            id: 5,
            name: 'Rapidos y furiosos 8',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$160'
        },
        {
            id: 6,
            name: 'Un Marido Perfecto',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: '$125'
        }
    ]

    return (
        <div className='mt-5'>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {array.map(item => (
                    <Col key={item.id}>
                        <Card>
                            <Card className="bg-dark text-white">
                                <Card.Img variant="top" src={movie} />
                                <Card.ImgOverlay >
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Footer>
                                    <Card.Text>Precio: {item.price}</Card.Text>
                                    <Button variant="outline-secondary" onClick={() => {
                                        props.setShow()
                                        props.dataMovies(item)
                                    }}>
                                        Agregar al carrito
                                    </Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Movies;