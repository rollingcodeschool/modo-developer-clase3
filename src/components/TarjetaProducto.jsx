const TarjetaProducto = ({ nombre, precio }) => {
  return (
    <div className="card p-3 mb-3 bg-info">
      <h3>Nombre:{nombre} </h3>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default TarjetaProducto;
