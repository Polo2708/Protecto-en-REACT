import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Productos</h1>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`http://localhost:5000${producto.imagen}`} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Stock: {producto.stock}</Card.Text>
                <Card.Text>Marca: {producto.marca}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
