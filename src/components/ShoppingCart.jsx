import React from 'react';

export default function ShoppingCart({ cart = [], onRemove, onDelete, onAdd }) {
  const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  
  const totalCost = cart.reduce((sum, item) => {
    const itemPrice = Number(item.offerPrice) || Number(item.price) || 0;
    const itemQty = Number(item.quantity) || 0;
    return sum + (itemPrice * itemQty);
  }, 0);

  return (
    <div style={{ flex: 1, minWidth: '300px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <h2 style={{ fontSize: '1.25rem', marginTop: 0, color: '#111827' }}>Carrito de Compras</h2>
      <p style={{ fontWeight: 'bold', color: '#111827' }}>Total de productos en carrito: {totalCount}</p>

      {cart.length === 0 ? (
        <p style={{ color: '#666', fontSize: '0.9rem' }}>El carrito está vacío. ¡Agrega productos!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}>
          {cart.map((item) => {
            const price = Number(item.offerPrice) || Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;
            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '8px',
                  gap: '8px'
                }}
              >
                <div style={{ flex: 1 }}>
                  <strong style={{ color: '#111827', display: 'block' }}>{item.name}</strong>
                  <span style={{ color: '#666', fontSize: '0.8rem' }}>
                    x{quantity} - ${price.toLocaleString('es-CL')} c/u
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <button onClick={() => onRemove(item.id)} style={{ padding: '2px 6px', background: '#e5e7eb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                  <button onClick={() => onAdd(item)} style={{ padding: '2px 6px', background: '#e5e7eb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                  <button onClick={() => onDelete(item.id)} title="Eliminar producto" style={{ padding: '2px 8px', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold' }}>🗑</button>
                </div>
                <span style={{ fontWeight: 'bold', color: '#111827', minWidth: '85px', textAlign: 'right' }}>
                  ${(price * quantity).toLocaleString('es-CL')}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '16px 0' }} />
      <h3 style={{ margin: 0, display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', color: '#111827' }}>
        <span>Total a Pagar:</span>
        <span style={{ color: '#16a34a' }}>${totalCost.toLocaleString('es-CL')}</span>
      </h3>
    </div>
  );
}