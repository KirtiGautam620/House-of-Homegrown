import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!query.id) return;

    fetch(`http://localhost:4000/api/products/${query.id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [query.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
