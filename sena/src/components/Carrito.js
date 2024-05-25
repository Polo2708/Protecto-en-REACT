import React, { useContext } from 'react';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { CarritoContext } from '../CarritoContext'; // Asegúrate de que esta ruta sea correcta

const Carrito = () => {
  //Obtener el estado del carrito y las funciones para modificarlo
  const { carrito, incrementarCantidad, decrementarCantidad, eliminarItem } = useContext(CarritoContext);

  //Calcular el total del carrito sumando su precio y cada producto multiplicarlo popr su cantidad
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Container>
      <h1 className="my-4">Carrito de Compras</h1>
      <ListGroup>
        {carrito.map(item => (
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
