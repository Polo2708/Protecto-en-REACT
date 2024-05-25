const express = require('express');
const router = express.Router();
const pool = require('../db');
const path = require('path');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM productos');
    res.json(results);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).send('Error al obtener productos');
  }
});

// Agregar un producto
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, stock, marca } = req.body;

  if (!req.files || !req.files.imagen) {
    return res.status(400).send('No se ha subido ninguna imagen');
  }

  const imagen = req.files.imagen;
  const uploadPath = path.join(__dirname, '..', 'uploads', imagen.name);

  imagen.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    try {
      const [result] = await pool.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock, marca, imagen) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, descripcion, precio, stock, marca, imagen.name]
      );
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      console.error('Error al agregar producto:', err);
      res.status(500).send('Error al agregar producto');
    }
  });
});

module.exports = router;
