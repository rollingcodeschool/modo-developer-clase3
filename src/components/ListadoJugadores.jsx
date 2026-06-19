import TarjetaJugador from "./TarjetaJugador.jsx";
import { titulares, suplentes } from "../data/jugadores.js";
import { useState } from "react";

const ListadoJugadores = () => {
  const [mostrarTitulares, setMostrarTitulares] = useState(true);

  const jugadores = mostrarTitulares ? titulares : suplentes;
  return (
    <div className="container">
      <h1>Seleccion Argentina</h1>
      <button onClick={() => setMostrarTitulares(!mostrarTitulares)}>
        Ver {mostrarTitulares ? "Suplentes" : "Titulares"}{" "}
      </button>
      <div className="row">
        {jugadores.map((jugador) => (
          <TarjetaJugador jugador={jugador} key={jugador.id} />
        ))}
      </div>
    </div>
  );
};

export default ListadoJugadores;
