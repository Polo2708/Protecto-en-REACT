const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, nombre, descripcion, precio, stock, marca, imagen FROM productos');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

module.exports = router;
