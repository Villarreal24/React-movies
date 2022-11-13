import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Header from './components/Header';
import Movies from './views/Movies';

import Payment from './views/Payment';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const [totalPay, setTotalPay] = useState(0);
  const [contTickets, setContTickets] = useState(0);
  const [show, setShow] = useState(false);
  const [shoppingMovie, setShoppingMovie] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dataMovies = (data) => {
    // const movies = shoppingMovie
    let exists = false;
    if (shoppingMovie.length < 1) {
      data.ticket = 1;
      // setContTickets(contTickets + 1)
      setTotalPay(totalPay + 120)
      setShoppingMovie([data]);
    } else {
      shoppingMovie.filter(item => {
        if (item.id === data.id) {
          exists = true
        }
      })
      if (!exists) {
        data.ticket = 1;
        // setContTickets(contTickets + 1)
        setShoppingMovie([...shoppingMovie, data]);
      }
    }

  }

  return (
    <div>
      <Header name="Header" setShow={handleShow} />
      <div className="container md:flex min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<Movies name="Movies" setShow={handleShow} dataMovies={dataMovies} />}
          />

          <Route
            path="/payment"
            element={<Payment name="Payment" />}
          />
        </Routes>

        <Offcanvas show={show} onHide={handleClose} placement="end" scroll="true">
          <ShoppingCart
            setShow={handleShow}
            shoppingMovie={shoppingMovie}
            setShoppingMovie={setShoppingMovie}
            totalPay={totalPay}
            setTotalPay={setTotalPay}
            contTickets={contTickets}
            setContTickets={setContTickets}
          />
        </Offcanvas>

      </div>
    </div>
  );
}

export default App;
