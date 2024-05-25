const express = require('express');
const cors = require('cors');
const path = require('path');
const productosRouter = require('./routes/productos');
const fileUpload = require('express-fileupload');

const app = express();

// Middleware para manejar JSON
app.use(express.json());//Permite a express analizar cuerpos JSON en solicitudes
app.use(cors());//Permite solicitudes desde otros dominios
app.use(fileUpload());//Maneja la subida de archivos

// Rutas
app.use('/api/productos', productosRouter);

// Configurar el directorio público para servir imágenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;//Usar el puerto definido en las variables 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
