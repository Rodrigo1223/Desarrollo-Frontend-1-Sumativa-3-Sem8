import React from 'react';

// Controla el desglose financiero del carrito de compras en tiempo real
function Carrito({ carrito, onIncrementar, onDecrementar, onEliminar }) {
  // CALCULOS DINÁMICOS: Uso de acumuladores nativos .reduce() y .length 
  const totalUnidades = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const totalPagar = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0);

  return (
    <div className="card p-3 shadow-sm bg-white border-0 sticky-top" style={{ top: '20px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h3 className="h5 my-0 text-dark fw-bold">Carrito de Compras</h3>
        <span className="badge bg-dark rounded-pill fs-6">{totalUnidades}</span>
      </div>

      {/* OPERADOR TERNARIO: Mensaje condicional si el carrito queda vacío  */}
      {carrito.length === 0 ? (
        <div className="alert alert-info text-center my-2 py-3" role="alert">
          Tu carrito está vacío. ¡Elige tus títulos favoritos!
        </div>
      ) : (
        <div>
          <div className="list-group list-group-flush mb-3" style={{ maxHeight: '320px', overflowY: 'auto' }}>
            {carrito.map((item) => (
              <div className="list-group-item px-0 py-3 bg-transparent border-bottom" key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-dark small fw-bold text-truncate" style={{ maxWidth: '140px' }}>{item.name}</span>
                  <button className="btn btn-sm text-danger p-0 border-0" onClick={() => onEliminar(item.id)}>🗑</button>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary py-0 px-2" onClick={() => onDecrementar(item.id)}>-</button>
                    <span className="btn btn-light disabled py-0 text-dark fw-bold">{item.cantidad}</span>
                    <button className="btn btn-outline-secondary py-0 px-2" onClick={() => onIncrementar(item.id)}>+</button>
                  </div>
                  <span className="fw-bold text-success small">\${(item.price * item.cantidad).toLocaleString('es-CL')}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-2 text-dark">
            <span>Total a Pagar:</span>
            <span className="text-danger">\${totalPagar.toLocaleString('es-CL')}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
