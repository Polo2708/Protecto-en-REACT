import React, { useState } from 'react';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';

const Carrito = () => {
  const [items, setItems] = useState([
    { id: 1, nombre: 'Balón de fútbol', precio: 29.99, cantidad: 1 },
    { id: 2, nombre: 'Zapatos deportivos', precio: 59.99, cantidad: 2 },
  ]);

  const incrementarCantidad = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
  };

  const decrementarCantidad = (id) => {
    setItems(items.map(item => item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item));
  };

  const eliminarItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Container>
      <h1 className="my-4">Carrito de Compras</h1>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center">
              <Col md={4}>
                <h2>{item.nombre}</h2>
              </Col>
              <Col md={2}>
                <p>Precio: ${item.precio}</p>
              </Col>
              <Col md={3}>
                <p>Cantidad: {item.cantidad}</p>
                <Button variant="outline-secondary" onClick={() => incrementarCantidad(item.id)}>+</Button>
                <Button variant="outline-secondary" onClick={() => decrementarCantidad(item.id)}>-</Button>
              </Col>
              <Col md={3}>
                <Button variant="danger" onClick={() => eliminarItem(item.id)}>Eliminar</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="mt-4">Total: ${total.toFixed(2)}</h2>
    </Container>
  );
};

export default Carrito;
