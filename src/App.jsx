import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [productsData, setProductsData] = useState([]); 
  const [cart, setCart] = useState([]);                 
  const [cargando, setCargando] = useState(true);       
  const [buscarTexto, setBuscarTexto] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  useEffect(() => {
    const consumirApiVideojuegos = () => {
      setTimeout(() => {
        const datosJuegosAPI = [
          { 
            id: 1, 
            name: 'Grand Theft Auto V', 
            description: 'Explora el mundo abierto de Los Santos en este aclamado título de acción.', 
            normalPrice: 45000, 
            offerPrice: 29990, 
            category: 'Acción', 
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
            rating: 4.8 
          },
          { 
            id: 2, 
            name: 'The Witcher 3: Wild Hunt', 
            description: 'Conviértete en el cazador de monstruos Geralt de Rivia en un vasto mundo RPG.', 
            normalPrice: 35000, 
            offerPrice: 19990, 
            category: 'RPG', 
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
            rating: 4.9 
          },
          { 
            id: 3, 
            name: 'Red Dead Redemption 2', 
            description: 'Una epopeya de forajidos en el corazón del salvaje oeste americano.', 
            normalPrice: 59990, 
            offerPrice: 39990, 
            category: 'Aventura', 
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80',
            rating: 4.9 
          },
          { 
            id: 4, 
            name: 'Cyberpunk 2077', 
            description: 'Una aventura de acción de mundo abierto ambientada en la megalópolis de Night City.', 
            normalPrice: 49990, 
            offerPrice: 24990, 
            category: 'RPG', 
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
            rating: 4.2 
          }
        ];
        setProductsData(datosJuegosAPI);
        setCargando(false);
      }, 1000);
    };
    consumirApiVideojuegos();
  }, []);

  const handleAddToCart = (product) => {
    const priceToUse = Number(product.offerPrice ?? product.normalPrice ?? product.price ?? 0);
    setCart((prev) => {
      const found = prev.find((item) => String(item.id) === String(product.id));
      if (found) {
        return prev.map((item) =>
          String(item.id) === String(product.id) 
            ? { ...item, quantity: (Number(item.quantity) || 0) + 1 } 
            : item
        );
      }
      return [
        ...prev, 
        { 
          ...product, 
          price: priceToUse, 
          offerPrice: priceToUse, 
          quantity: 1 
        }
      ];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => 
      prev
        .map((item) => 
          String(item.id) === String(productId) 
            ? { ...item, quantity: (Number(item.quantity) || 1) - 1 } 
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDeleteItem = (productId) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(productId)));
  };

  const productosFiltrados = productsData.filter(prod => {
    const coincideTexto = prod.name.toLowerCase().includes(buscarTexto.toLowerCase().trim());
    const coincideCategoria = categoriaSeleccionada === 'Todas' || prod.category === categoriaSeleccionada;
    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="container py-4 bg-white rounded shadow-sm my-4" style={{ maxWidth: '1200px' }}>
      <header className="border-bottom pb-3 mb-4 d-flex justify-content-between align-items-center">
        <h1 className="h2 m-0 fw-bold text-dark">TiendaReact</h1>
        <span className="badge bg-primary fs-6 px-3 py-2">Semana 8</span>
      </header>

      <div className="row g-3 p-3 bg-light rounded border mb-4">
        <div className="col-md-8">
          <input 
            type="text" 
            className="form-control form-control-lg" 
            placeholder="Buscar productos..." 
            value={buscarTexto}
            onChange={(e) => setBuscarTexto(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select 
            className="form-select form-select-lg bg-white"
            value={categoriaSeleccionada} 
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Acción">Acción</option>
            <option value="RPG">RPG</option>
            <option value="Aventura">Aventura</option>
          </select>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-8">
          {cargando ? (
            <div className="text-center py-5 bg-light rounded border">
              <div className="spinner-border text-primary mb-3" role="status"></div>
              <p className="text-muted fw-bold mb-0">Cargando productos...</p>
            </div>
          ) : (
            productosFiltrados.length === 0 ? (
              <div className="alert alert-warning text-center py-4 border-2" role="alert">
                <h4 className="alert-heading fw-bold">⚠️ Sin coincidencias</h4>
                <p className="mb-0">No se encontraron productos con ese filtro.</p>
              </div>
            ) : (
              <ProductList products={productosFiltrados} onAddToCart={handleAddToCart} />
            )
          )}
        </div>

        <div className="col-lg-4">
          <ShoppingCart 
            cart={cart} 
            onRemove={handleRemoveFromCart} 
            onDelete={handleDeleteItem} 
            onAdd={handleAddToCart} 
          />
        </div>
      </div>
    </div>
  );
}