import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Productos from './components/Productos';
import AgregarProducto from './components/AgregarProducto';
import Carrito from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/agregar" element={<AgregarProducto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
