import React from "react";

import { useContador } from "./useContador";

const Hooks = () => {
  const { contador, incrementar, decrementar } = useContador(1, 10);

  return (
    <div>
      <h2> Contador</h2>
      <button onClick={decrementar}>-</button>
      <strong>{contador}</strong>
      <button onClick={incrementar}>+</button>
      <hr />
    </div>
  );
};

export default Hooks;
