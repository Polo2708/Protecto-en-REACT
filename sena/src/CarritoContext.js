import React, { createContext, useState } from 'react';

//Creamos el contexto del carrito de compras
export const CarritoContext = createContext();

//Proveedor de contexto para gestionar el estado del carrito de compras 
export const CarritoProvider = ({ children }) => {
  //Estado para almacenar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  //Funcion para agregar un producto al carrito
  const addToCart = (producto) => {
    //Verificar si el producto ya esta en el carrito 
    const existingItem = carrito.find(item => item.id === producto.id);
    if (existingItem) {
      //Si el producto ya existe en el carrito aumenta la cantidad 
      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      //Si el producto no existe se agrega al carrito con cantidad de 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  //Funcion para incrementar la cantidad de un producto en el carrito
  const incrementarCantidad = (id) => {
    setCarrito(carrito.map(item => 
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };
  
  //Funcion para decrementar la cantidad de un producto en el carrito
  const decrementarCantidad = (id) => {
    setCarrito(carrito.map(item => 
      item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    ));
  };

  //Funcion para eliminar un producto del carrito
  const eliminarItem = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, incrementarCantidad, decrementarCantidad, eliminarItem }}>
      {children}
    </CarritoContext.Provider>
  );
};
