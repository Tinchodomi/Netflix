import React from "react";

const Articulo = ({ img, titulo, children }) => {
  return (
    <div>
      <article>
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        <button>Leer articulo</button>
        {children}
      </article>
    </div>
  );
};

export default Articulo;
