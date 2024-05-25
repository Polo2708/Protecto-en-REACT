const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

//Configuracion de almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);//Nombre del archivo subido
  },
});

//Inicializacion de multer
const upload = multer({ storage: storage });

//Ruta POST para subir un archivo
router.post('/', upload.single('imagen'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded.' });
  }
  res.send({ imagePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
