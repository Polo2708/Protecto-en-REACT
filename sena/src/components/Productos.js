import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CarritoContext } from '../CarritoContext';  // Ajusta la ruta según la estructura de tu proyecto

const Productos = () => {
  //Define un estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);
  //Obtener la funcion addToCart del contexto del carrito
  const { addToCart } = useContext(CarritoContext);

  //useEffect para obtener los productos cuando el componente se monta 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        //Realizar una solicitud GET a la API para obtener los productos
        const response = await axios.get('http://localhost:5000/api/productos');
        //Actualizar el estado local con los datos obtenidos
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    //LLamar a la funcion fetchProductos
    fetchProductos();
  }, []);

  return (
    <Container>
      <Row>
        {productos.map(producto => (
          <Col key={producto.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`http://localhost:5000/uploads/${producto.imagen}`} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>${producto.precio}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(producto)}>Agregar al Carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
