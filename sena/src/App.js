import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Productos from './components/Productos';
import AgregarProducto from './components/AgregarProducto';
import Navigation from './components/Navbar';
import Carrusel from './components/Carrusel';
import Carrito from './components/Carrito';
import { CarritoProvider } from './CarritoContext';
import Footer from './components/Footer';

//Componente principal de la aplicación
function App() {
  return (
    <CarritoProvider>
      <Router>
        {/**Barra de navegacion*/}
        <Navigation />
        <MainContent />
        {/** Pie de pagina */}
        <Footer />
      </Router>
    </CarritoProvider>
  );
}

//Componente para manejar el contenido principal
function MainContent() {
  const location = useLocation();

  return (
    <>
    {/** Mostrar el carrusel colo en la pagina principal */}
      {location.pathname === '/' && (
          <Carrusel />
      )}
      <Container>
        {/** Definicion de las rutas de la aplicacion */}
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
