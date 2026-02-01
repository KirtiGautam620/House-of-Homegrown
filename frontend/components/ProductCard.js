import Link from 'next/link';
export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #C19A6B',
      padding: '16px',
      borderRadius: '8px'
    }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link href={`/product/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}
