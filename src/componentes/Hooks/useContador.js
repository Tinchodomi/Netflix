import { useState } from "react";

export const useContador = (valorIni, valorMax) => {
  const [contador, setContador] = useState(valorIni);

  const incrementar = () => {
    if (contador < valorMax) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > valorIni) {
      setContador(contador - 1);
    }
  };

  return { contador, incrementar, decrementar };
};
