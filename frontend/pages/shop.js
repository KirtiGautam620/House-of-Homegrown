import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
