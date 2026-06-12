import { useState } from "react";

const Contador = () => {
  // let contador = 0

  const [contador, setContador] = useState(0);

  const sumar = () => {
    // contador = contador + 1;
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };
  const reiniciar = () => {
    setContador(0);
  };

  return (
    <>
      <div className="fs-1">{contador} </div>
      <button className="btn btn-primary" onClick={sumar}>
        +
      </button>
      <button className="btn btn-primary ms-2" onClick={restar}>
        -
      </button>
      <button className="btn btn-primary ms-2" onClick={reiniciar}>
        Reiniciar
      </button>
    </>
  );
};

export default Contador;
