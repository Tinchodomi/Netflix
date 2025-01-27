import { useEffect, useState } from "react";

const productos = [
  { nombre: "pc gmaer", precio: 1500 },
  { nombre: "notebook", precio: 1500 },
  { nombre: "monitor", precio: 500 },
  { nombre: "teclado", precio: 200 },
];

const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 0);
  });
};

const AsyncAwait = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log(getProductos());

    const pedirDatos = async () => {
      const inventario = await getProductos();
      setProductos(inventario);
    };

    pedirDatos();
  }, [productos]);

  return (
    <div>
      <h2>Mis Productos</h2>

      {productos.map((prod, index) => {
        return (
          <div key={index}>
            <p>{prod.nombre}</p>
            <p>{prod.precio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AsyncAwait;
