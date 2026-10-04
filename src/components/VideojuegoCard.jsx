import React, { useState } from 'react';

// Componente modular para renderizar cada videojuego individual 
function VideojuegoCard({ juego, onAgregar }) {
  // ESTADO LOCAL INTERACTIVO: Cambia temporalmente al presionar el botón 
  const [agregado, setAgregado] = useState(false);

  const manejarAgregar = () => {
    onAgregar(juego);
    setAgregado(true);
    // Vuelve al estado original automáticamente después de 1.5 segundos
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="p-3 bg-white d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
        <img 
          src={juego.image} 
          className="card-img-top img-fluid" 
          alt={juego.name} 
          style={{ maxHeight: '100%', objectFit: 'contain' }} 
        />
      </div>
      <div className="card-body d-flex flex-column bg-light">
        <span className="badge bg-secondary align-self-start mb-2">{juego.category}</span>
        <h5 className="card-title h6 text-dark text-truncate fw-bold">{juego.name}</h5>
        <div className="my-2">
          <span className="text-muted text-decoration-line-through small me-2">
            \${juego.precioNormal.toLocaleString('es-CL')}
          </span>
          <span className="text-danger fw-bold fs-5">
            \${juego.price.toLocaleString('es-CL')}
          </span>
        </div>
        
        {/* RENDERIZADO CONDICIONAL: Alterna colores y texto según la interacción */}
        <button 
          className={`btn mt-auto fw-bold w-100 ${agregado ? 'btn-success' : 'btn-primary'}`} 
          onClick={manejarAgregar}
        >
          {agregado ? '✓ ¡Agregado!' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
}

export default VideojuegoCard;
