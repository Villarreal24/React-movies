import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack';
import { useLocation } from 'react-router';

const Payment = (props) => {
    const location = useLocation()
    const { movies } = location.state;
    const { contTickets } = location.state;
    const { totalPay } = location.state;
    const iva = props.iva
    // console.log(props)
    return (
        <Stack gap={2} className="col-md-5 mx-auto mt-5">
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <h5>Pago de los boletos</h5>
                    <Card.Subtitle className="mb-2 mt-3 text-muted">Boletos de peliculas que compraras</Card.Subtitle>
                    <div className='mt-5 mb-5'>
                        {movies.map(item => (
                            <ListGroup key={item.id}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>{item.title}</Col>
                                        <Col md="auto">Boletos: {item.ticket}</Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </div>
                    <div>
                        <h6>Precio unitario del boleto: $120.00</h6>
                        <h6>Total de boletos a pagar: {contTickets}</h6>
                        <h6>IVA: ${iva}</h6>
                        <h6>Cantidad total a pagar: ${totalPay}</h6>
                    </div>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default Payment;