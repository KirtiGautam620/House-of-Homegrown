import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'dotenv/config'

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);
  const uri = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";


  useEffect(() => {
    if (!query.id) return;
    fetch(`${uri}/products/${query.id}`)
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
