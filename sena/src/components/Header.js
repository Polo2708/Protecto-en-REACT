import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Header = () => {
  return (
    //Navbar de Bootstrap
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>{/** Contenedor de Bootstrap para alinear el contenido */}
        <Navbar.Brand href="/">Sena Tienda Deportiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/carrito">
              <Nav.Link>Carrito</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/agregar-producto">
              <Nav.Link>Agregar Producto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
