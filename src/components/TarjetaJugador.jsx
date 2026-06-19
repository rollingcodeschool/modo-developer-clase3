const TarjetaJugador = ({ jugador }) => {
  return (
    <div className="col-md-4">
      <div className="card m-2">
        <div className="card-body">
          <h5>Nombre:{jugador.nombre} </h5>
          <p>Posicion: {jugador.posicion} </p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaJugador;
