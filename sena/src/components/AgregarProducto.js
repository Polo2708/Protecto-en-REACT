import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [marca, setMarca] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Subir la imagen primero
      const formData = new FormData();
      formData.append('imagen', imagen);

      const uploadResponse = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imagePath = uploadResponse.data.imagePath;

      // Luego, enviar los datos del producto junto con la ruta de la imagen
      const nuevoProducto = {
        nombre,
        descripcion,
        precio,
        stock,
        marca,
        imagen: imagePath,
      };

      await axios.post('http://localhost:5000/api/productos', nuevoProducto);

      alert('Producto agregado exitosamente');
      // Restablecer el formulario
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setStock('');
      setMarca('');
      setImagen(null);
    } catch (error) {
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
