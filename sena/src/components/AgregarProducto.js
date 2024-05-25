import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AgregarProducto = () => {
  //Definicion de estado para cada campo en el formulario
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [marca, setMarca] = useState('');
  const [imagen, setImagen] = useState(null);

  //Menejar el envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Crear un objeto FormData para enviar los datos del producto
      const formData = new FormData();
      formData.append('imagen', imagen);
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('precio', precio);
      formData.append('stock', stock);
      formData.append('marca', marca);

      //Enviar los datos a la API
      await axios.post('http://localhost:5000/api/productos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      //Mostrar un mensaje de éxito
      alert('Producto agregado exitosamente');

      //Restablecer los campos del formulario
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setStock('');
      setMarca('');
      setImagen(null);
    } catch (error) {

      //Mostrar un mensaje de error en caso de fallo
      console.error('Error al agregar producto:', error);
      alert('Error al agregar producto');
    }
  };

  return (
    <Container>
      <h1 className="my-4">Agregar Producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Agregar Producto
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
