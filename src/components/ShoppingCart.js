import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const ShoppingCart = (props) => {

    const setMovies = props.setShoppingMovie
    const movies = props.shoppingMovie;
    const totalPay = props.totalPay
    const contTickets = props.contTickets

    const calculateTotal = () => {
        let total = 0
        let acum = 0
        movies.map(movies => {
            acum = acum + movies.ticket
            props.setContTickets(acum);
        })
        total = acum * 120
        props.setTotalPay(total)
    }

    const purchase = () => {
        console.log("Total de boletos: ", contTickets)
    }

    const addTicket = (data) => {
        data.ticket = data.ticket + 1
        calculateTotal();
    }

    const reduceTicket = (data) => {
        if (data.ticket > 1) {
            data.ticket = data.ticket - 1
            calculateTotal();
        } else {
            const updateMovies = movies.filter(
                movie => movie.id !== data.id)
            setMovies(updateMovies)
        }
    }

    useEffect(() => {
        calculateTotal();
    }, [movies])

    return (
        <div>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de pago</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h6>Costo por boleto: $120</h6>
                <hr />
                {movies.map(item => (
                    <div className='pt-2' key={item.id}>
                        <h6>{item.original_title}</h6>
                        <Row>
                            <Col><p>Boletos: {item.ticket}</p></Col>
                            <Col xs="4" sm="3">
                                <Button size='sm' variant='outline-danger'
                                    onClick={() => reduceTicket(item)}>
                                    Restar
                                </Button>
                            </Col>
                            <Col xs="4" sm="3">
                                <Button size='sm' variant='outline-success'
                                    onClick={() => addTicket(item)}>
                                    Agregar
                                </Button>
                            </Col>
                        </Row>

                        <hr className='mt-2' />
                    </div>
                ))}
            </Offcanvas.Body>

            <div className="m-3">
                <Row>
                    <Col><h5>Total: {totalPay}</h5></Col>
                    <Col>
                        <Button variant='success' onClick={() => purchase()}>
                            Realizar compra
                        </Button>
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default ShoppingCart;