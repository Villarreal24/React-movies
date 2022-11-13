import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const ShoppingCart = (props) => {
    const movie = props.shoppingMovie;

    return (
        <div>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de pago</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {movie.map(item => (
                    <div className='pt-2' key={item.id}>
                        <h6>{item.name}</h6>
                        <Row>
                            <Col><p>{item.price}</p></Col>
                            <Col xs="4" sm="3"><Button>Eliminar</Button></Col>
                        </Row>

                        <hr className='mt-2' />
                    </div>
                ))}
            </Offcanvas.Body>

            <div className="m-3">
                <Button>
                    Realizar compra
                </Button>
            </div>
        </div>
    );
}

export default ShoppingCart;