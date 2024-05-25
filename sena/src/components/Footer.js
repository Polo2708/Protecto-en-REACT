import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    //Pie de pagina
    <footer className="bg-dark text-light py-4 mt-4">
      <Container>
        <Row> {/** Fila para organizar el contenido */}
          <Col md={6}>
            <h5>Devs Lads Tienda Deportiva</h5>
            <p>&copy; 2023 SENA. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Contacto</h5>
            <p>Email: info@sena2024.com</p>
            <p>Teléfono: +57 123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
