import { useState } from "react";
import { sculptureList } from "../data/esculturas.js";

const Esculturas = () => {
  const [index, setIndex] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function handleNextClick() {
    // index = index + 1
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let escultura = sculptureList[index];

  function handleMoreClick() {
    // if (mostrar === true) {
    //   setMostrar(false);
    // } else {
    //   setMostrar(true);
    // }
    setMostrar(!mostrar);
  }
  return (
    <div className="container">
      <button onClick={handleNextClick}>Siguiente</button>
      <h1>
        {escultura.name} por {escultura.artist}{" "}
      </h1>
      <p>({index + 1} de 12)</p>

      <button onClick={handleMoreClick}>
        {mostrar ? "Ocultar" : "Mostrar"} detalles
      </button>

      {mostrar && <p>{escultura.description}</p>}
      <br />
      <img src={escultura.url} alt={escultura.alt} />
    </div>
  );
};

export default Esculturas;
