const fs = require('fs');
const path = require('path');
const db = require('./db'); // Asegúrate de que tu archivo db.js esté correctamente configurado

// Ruta de la carpeta con las imágenes de los productos
const carpetaImagenes = path.join(__dirname, 'imagenes');

// Función para leer las subcarpetas y archivos de la carpeta principal y agregarlos a la base de datos
async function agregarProductosDesdeCarpeta() {
  try {
    // Leer las subcarpetas en la carpeta de imágenes
    const marcas = fs.readdirSync(carpetaImagenes);

    // Iterar sobre cada subcarpeta (marca)
    for (const marca of marcas) {
      const carpetaMarca = path.join(carpetaImagenes, marca);
      if (fs.lstatSync(carpetaMarca).isDirectory()) {
        const nombresArchivos = fs.readdirSync(carpetaMarca);

        // Iterar sobre cada archivo en la subcarpeta
        for (const nombreArchivo of nombresArchivos) {
          // Comprobar si el archivo es una imagen (puedes ajustar esto según tus necesidades)
          if (nombreArchivo.endsWith('.jpg') || nombreArchivo.endsWith('.jpeg') || nombreArchivo.endsWith('.png')) {
            const imagenBuffer = fs.readFileSync(path.join(carpetaMarca, nombreArchivo));

            // Agregar información a la base de datos
            await db.query('INSERT INTO productos (nombre, descripcion, precio, stock, imagen, marca) VALUES (?, ?, ?, ?, ?, ?)', 
              [nombreArchivo, 'Descripción del producto', 19.99, 10, imagenBuffer, marca]);
            console.log(`Se ha agregado ${nombreArchivo} de la marca ${marca} a la base de datos.`);
          }
        }
      }
    }

    console.log('Todos los productos han sido agregados correctamente.');
  } catch (error) {
    console.error('Error al agregar productos desde la carpeta:', error);
  }
}

// Ejecutar la función para agregar productos desde la carpeta
agregarProductosDesdeCarpeta();
