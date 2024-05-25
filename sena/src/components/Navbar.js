import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const Navigation = () => {
  return (
    //Componente Navbar de React-bootstrap
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">Devs Lads</Navbar.Brand>
      {/** Boton para mostrar y ocultar el menu en pantallas pequeñas */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Productos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/agregar-producto">
            <Nav.Link>Agregar Producto</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/carrito">
            <Nav.Link>Carrito</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
