import React from 'react';

/**
 * Componente funcional para renderizar el catálogo de productos.
 * Muestra imagen, nombre, descripción, valoración, precio normal tachado y precio oferta.
 */
export default function ProductList({ products, onAddToCart }) {
  return (
    <div style={{ flex: 1, minWidth: '300px' }}>
      <h2 style={{ fontSize: '1.25rem', color: '#111827' }}>Catálogo de Productos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', background: '#fff' }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
              onError={(e) => {
                e.target.onerror = null;
                // Imagen de respaldo definitiva si la original falla
                e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80';
              }}
            />
            <h3 style={{ margin: '12px 0 8px 0', color: '#111827' }}>{product.name}</h3>
            <p style={{ color: '#555', fontSize: '0.9rem', margin: '0 0 8px 0' }}>{product.description}</p>
            
            {/* Valoración del producto */}
            {product.rating && (
              <div style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#d97706', fontWeight: 'bold' }}>
                ⭐ {product.rating} / 5
              </div>
            )}

            <div style={{ margin: '8px 0 16px 0' }}>
              {product.normalPrice && (
                <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '10px', fontSize: '0.85rem' }}>
                  Normal: ${product.normalPrice.toLocaleString('es-CL')}
                </span>
              )}
              <strong style={{ color: '#b91c1c', fontSize: '1rem' }}>
                Oferta: ${product.offerPrice.toLocaleString('es-CL')}
              </strong>
            </div>

            {/* Manejo de eventos onClick para agregar al carrito */}
            <button
              onClick={() => onAddToCart(product)}
              style={{
                width: '100%',
                padding: '10px',
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}