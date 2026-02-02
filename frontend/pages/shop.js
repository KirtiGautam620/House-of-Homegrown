import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import 'dotenv/config'
export default function Shop() {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
    const uri = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    let url = `${uri}/products?page=${page}&limit=10`;
    if (category) {
      url += `&category=${category}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.pages);
      });
  }, [page, category]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

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
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}
