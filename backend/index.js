const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const multer = require('multer');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'imagenes/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Importar el enrutador de productos
const productosRouter = require('./routes/productos');

// Middleware para manejar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para manejar datos de formularios

// Middleware para permitir CORS
app.use(cors());

// Middleware para servir archivos estáticos
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// Rutas
app.use('/api/productos', productosRouter);

// Ruta para cargar imágenes
app.post('/upload', upload.single('imagen'), (req, res) => {
  try {
    res.status(200).json({ imagePath: `/imagenes/${req.file.filename}` });
  } catch (error) {
    res.status(500).json({ error: 'Error al cargar imagen' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
