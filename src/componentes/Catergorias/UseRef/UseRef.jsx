import React, { useRef } from 'react'

const UseRef = () => {
  
    const contadorCarrito = useRef(0);
    
    function agregarCarrito() {
        
        contadorCarrito.current = contadorCarrito.current + 1
        console.log(contadorCarrito.current)
    }
    return (
    <div>
        <h3>Productos en el carrito: {contadorCarrito.current} </h3>
        <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default UseRef
